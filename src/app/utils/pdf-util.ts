import { useState, useRef } from 'react';
import { saveAs } from 'file-saver';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';
import { jsPDF } from 'jspdf';

import { InformedCanvas, Label, SegmentInformation, LabelType } from '@/src/app/models/Label';
import { UsageEventType } from '@/src/app/models/UsageEventType';

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

// 13.5 x 1.5 of horizontal are "safe" for classic A4 single-label pages. 
// These are PDF pt units and can be converted to mm (also can be created as inputs on the page)
// The A4 4-label ones fit horizontally but require more vertical space. 20 and *1.75 work nicely
const outputHorizontalMargin = 20;
const outputVerticalMargin = outputHorizontalMargin * 1.75;
const outputLabelWidth = 270.5;
const outputLabelHeight = 383.5;
const outputFormat = "image/jpeg"
const outputQuality = 0.8;

function getCurrentDateTimeFormatted(): string {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}-${hours}${minutes}${seconds}`;
}

export function usePDFHandler() {
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [pdfPages, setPdfPages] = useState<InformedCanvas[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handlerPageHash = useRef('');

    const clearPdfPages = () => {
        setPdfPages([]);
        setSelectedFiles(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        const files = e.target.files ? Array.from(e.target.files) : [];

        // Check that all files are PDFs
        const nonPdfFiles = files.filter(file => file.type !== 'application/pdf');
        if (nonPdfFiles.length > 0) {
            alert('Some files were not uploaded because they are not PDFs.');
            setIsLoading(false);
            return;
        }

        // Check that no more than 100 files are selected
        if (files.length > 100) {
            alert('You cannot upload more than 100 files at once.');
            setIsLoading(false);
            return;
        }

        // Check that no single file exceeds 1MB
        const largeFiles = files.filter(file => file.size > 1000000); // 1MB in bytes
        if (largeFiles.length > 0) {
            alert('Some files were not uploaded because they exceed the 1MB size limit.');
            setIsLoading(false);
            return;
        }

        // Check that the total size of all files does not exceed 5MB
        const totalSize = files.reduce((total, file) => total + file.size, 0);
        if (totalSize > 5000000) { // 5MB in bytes
            alert('The total size of all files exceeds the 5MB limit.');
            setIsLoading(false);
            return;
        }

        // Initial filtering
        const validFiles = files.filter(file =>
            file.type === 'application/pdf' && file.size <= 1000000 // 1MB in bytes
        );

        const payloadSize = validFiles.reduce((total, file) => total + file.size, 0);

        if (validFiles.length === 0) {
            clearPdfPages();
            setIsLoading(false);
            alert('There were no valid files selected.');
            return;
        }

        setSelectedFiles(validFiles as any);
        handleFileProcessing(validFiles as any, payloadSize);
    };

    const handleFileProcessing = async (passedFiles: FileList, payloadSize: number) => {
        let allPages = 0;

        // Filter valid files
        const validFiles = Array.from(passedFiles || []).filter(file =>
            file.type === 'application/pdf' && file.size <= 1000000 // 1MB in bytes
        );

        const allLabels = await Promise.all(Array.from(passedFiles || []).map(async (file: File) => {
            const fileReader = new FileReader();
            const labels: InformedCanvas[] = [];

            // Getting the file
            fileReader.readAsArrayBuffer(file);
            const result = await new Promise<ArrayBuffer>((resolve) => {
                fileReader.onload = () => resolve(fileReader.result as ArrayBuffer);
            });

            const pdf = await getDocument({ data: new Uint8Array(result) }).promise;
            const numPages = pdf.numPages;
            allPages += numPages;

            for (let i = 1; i <= numPages; i++) {
                const page = await pdf.getPage(i);
                const content = await page.getTextContent();

                const label = new Label({ content: content });
                const newPages = await label.getPages(document, page);

                for (let newPage of newPages.pages) {
                    labels.push(newPage);
                }
            }

            return labels;
        }));

        try {
            await fetch('/api/usage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    actionType: UsageEventType.Process,
                    eventData: {
                        pageHash: handlerPageHash.current,
                        filesNum: validFiles.length,
                        pagesNum: allPages,
                        labelsNum: allLabels.flat().length,
                        payloadSize: payloadSize,
                        RMNum: allLabels.flat().filter(page => page.labelType === LabelType.RM || page.labelType === LabelType.RMMobile).length,
                        RMINum: allLabels.flat().filter(page => page.labelType === LabelType.RMInternational || page.labelType === LabelType.RMInternationalMobile).length,
                        EbayRMNum: allLabels.flat().filter(page => page.labelType === LabelType.Ebay).length,
                        PFNum: allLabels.flat().filter(page => page.labelType === LabelType.ParcelForce).length
                    }
                }),
            });
        } catch (error) {
            console.error('Error recording PDF processing:', error);
        }

        setPdfPages(allLabels.flat());
        setIsLoading(false);
    };

    async function preparePDF(labels: InformedCanvas[], actionType: UsageEventType, hasMargin: Boolean) {
        const doc = new jsPDF({ unit: 'pt' });
        let imagesOnAPage = 0;
        let allPages = 1;

        labels.forEach((canvas, index) => {
            const imgData = canvas.toDataURL(outputFormat, outputQuality);

            let coordinate: SegmentInformation = {
                x: outputHorizontalMargin,
                y: outputVerticalMargin,
                width: outputLabelWidth,
                height: outputLabelHeight,
            };

            // Add a new page after every 4th image
            if (index !== 0 && index % 4 === 0) {
                doc.addPage();
                allPages++;
                imagesOnAPage = 0;
            }

            // Added to handle margin-less print (for AirPrint and similar)
            if (hasMargin) {
                switch (imagesOnAPage) {
                    case 0:
                        coordinate.x = outputHorizontalMargin;
                        coordinate.y = outputVerticalMargin;
                        break;
                    case 1:
                        coordinate.x = doc.internal.pageSize.getWidth() - outputHorizontalMargin - outputLabelWidth;
                        coordinate.y = outputVerticalMargin;
                        break;
                    case 2:
                        coordinate.x = outputHorizontalMargin;
                        coordinate.y = doc.internal.pageSize.getHeight() - outputVerticalMargin - outputLabelHeight;
                        break;
                    case 3:
                        coordinate.x = doc.internal.pageSize.getWidth() - outputHorizontalMargin - outputLabelWidth;
                        coordinate.y = doc.internal.pageSize.getHeight() - outputVerticalMargin - outputLabelHeight;
                        break;
                }
            }
            else {
                coordinate.width = doc.internal.pageSize.getWidth() / 2 - outputHorizontalMargin / 2;
                coordinate.height = doc.internal.pageSize.getHeight() / 2 - outputVerticalMargin / 2;

                // Specifically for the a4 4-section pages I'm using
                switch (imagesOnAPage) {
                    case 0:
                        coordinate.x = 0 + outputHorizontalMargin / 8;
                        coordinate.y = 0 + outputHorizontalMargin; //On purpose 
                        break;
                    case 1:
                        coordinate.x = doc.internal.pageSize.getWidth() / 2 + outputHorizontalMargin / 2 - outputHorizontalMargin / 8;
                        coordinate.y = 0 + outputHorizontalMargin; //On purpose
                        break;
                    case 2:
                        coordinate.x = 0 + outputHorizontalMargin / 8;
                        coordinate.y = doc.internal.pageSize.getHeight() / 2 + outputVerticalMargin / 2;
                        break;
                    case 3:
                        coordinate.x = doc.internal.pageSize.getWidth() / 2 + outputHorizontalMargin / 2 - outputHorizontalMargin / 8;
                        coordinate.y = doc.internal.pageSize.getHeight() / 2 + outputVerticalMargin / 2;
                        break;
                }
            }

            doc.addImage(imgData, coordinate.x, coordinate.y, coordinate.width, coordinate.height);
            imagesOnAPage++;
        });

        const uint8Array = doc.output('arraybuffer');
        const returnBlob = new Blob([uint8Array], { type: 'application/pdf' });

        try {
            await fetch('/api/usage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    actionType: actionType,
                    eventData: {
                        pageHash: handlerPageHash.current,
                        filesNum: 1, // Because we ever only download/print one file
                        pagesNum: allPages, // assumes 4 per page
                        labelsNum: labels.length,
                        payloadSize: returnBlob.size,
                        RMNum: labels.filter(page => page.labelType === LabelType.RM).length,
                        RMINum: labels.filter(page => page.labelType === LabelType.RMInternational).length,
                        EbayRMNum: labels.filter(page => page.labelType === LabelType.Ebay).length,
                        PFNum: labels.filter(page => page.labelType === LabelType.ParcelForce).length
                    }
                }),
            });
        } catch (error) {
            console.error('Error recording PDF upload:', error);
        }

        return returnBlob;
    }

    const handleFilePrinting = async (hasMargin: Boolean) => {
        // Output as blob
        const blob = await preparePDF(pdfPages, UsageEventType.Print, hasMargin);

        // Create an iframe and append it to the body
        const blobURL = URL.createObjectURL(blob);

        // Create an iframe and append it to the body
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        // Set iframe src to blob URL
        iframe.src = blobURL;

        // Wait for iframe to load the content, then print
        iframe.onload = function () {
            setTimeout(function () {
                if (iframe.contentWindow) {
                    iframe.contentWindow.print();
                }
            }, 1);
        };
    };

    const handleFileDownload = async (hasMargin: boolean) => {
        preparePDF(pdfPages, UsageEventType.Download, hasMargin)
        .then(blob => {
            saveAs(blob, `PostLabel - ${getCurrentDateTimeFormatted()}.pdf`);
        });
    }

    return {
        selectedFiles,
        pdfPages,
        fileInputRef,
        handlerPageHash,
        isLoading,
        handleFileChange,
        handleFileProcessing,
        handleFileDownload,
        handleFilePrinting,
        clearPdfPages
    };
}
