'use client'

import { usePDFHandler } from '@/src/app/utils/pdf-util';
import { useEffect } from 'react';
import CryptoJS from 'crypto-js';
import Image from 'next/image';
import Link from 'next/link';

// Generate a unique GUID for each page load
const generateGUID = (w: Window) => {
    const { userAgent, language } = w.navigator;
    const { height, width, pixelDepth } = w.screen;

    // Construct a unique identifier (uid) string using window information
    const uid = `${userAgent.replace(/\D+/g, '')}${language}${height}${width}${pixelDepth}${Date.now()}`;

    // Hash the uid to create a pseudo-unique identifier
    const hashedUid = CryptoJS.SHA256(uid).toString();

    return hashedUid;
};

export default function Page() {
    const { pdfPages, selectedFiles, fileInputRef, handlerPageHash, isLoading, handleFileChange, handleFileProcessing, handleFileDownload, handleFilePrinting, clearPdfPages } = usePDFHandler();

    useEffect(() => { handlerPageHash.current = generateGUID(window); });

    return (
        <section className="text-gray-600 body-font flex flex-col gap-4 flex-grow ">
            <div className="container p-4 mx-auto space-y-4">
                <div className="flex flex-col xl:w-3/4 w-full bg-orange-100  text-orange-700 mx-auto p-4 rounded text-sm" role="alert">
                    <strong className="font-bold">Royal Mail Labels Warning</strong>
                    <span className="block sm:inline">
                        The tool does <strong>not</strong> support newest Royal Mail "Label" exports from web version where you can select which corner it goes to. <Link className=" text-blue-500" href="/about#royal-mail-formats">
                            Learn more.
                        </Link>
                    </span>
                </div>
                <div className="flex xl:w-3/4 w-full md:flex-row max-md:flex-col max-md:px-0 mx-auto md:space-x-4 md:space-y-0 space-y-4 items-stretch">
                    <div className="flex mx-auto max-md:w-full flex-grow">
                        <input
                            ref={fileInputRef}
                            id="files"
                            type="file"
                            accept="application/pdf"
                            multiple
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e)}
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        <button
                            className={`ml-2 text-gray-700 ${pdfPages.length === 0 || selectedFiles == null || selectedFiles.length === 0 ? ("bg-gray-100") : ("bg-gray-300 hover:bg-gray-200")} "focus:outline-none border-0 py-2 px-4 rounded text-lg justify-between items-center"`}
                            onClick={clearPdfPages}
                            disabled={pdfPages.length === 0 || selectedFiles == null || selectedFiles.length === 0}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-row gap-4 justify-center max-md:w-full m-0 p-0">
                        <button 
                            className={` text-gray-700 ${pdfPages.length === 0 ? 'bg-gray-100' : 'bg-gray-300 focus:outline-none hover:bg-gray-200'} border-0 py-2 px-4 rounded text-lg`} 
                            onClick={(event) => handleFileDownload(true)} 
                            disabled={pdfPages.length === 0}
                            >Download
                        </button>
                        <button 
                            className={`text-gray-700 ${pdfPages.length === 0 ? 'bg-gray-100' : 'bg-gray-300 focus:outline-none hover:bg-gray-200'} border-0 py-2 px-4 rounded text-lg`} 
                            onClick={async (event) => handleFilePrinting(true)} 
                            disabled={pdfPages.length === 0}
                            >Print
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-grow w-full mx-auto container p-4 overflow-y-auto items-center">
            {isLoading ? (
                    <div className="mx-auto">
                        <svg className="animate-spin h-32 w-32 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                ) : (
                    <div className="grid mx-auto md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                        {pdfPages && pdfPages.length === 0 ? (
                            <div className="flex justify-center items-center flex-col col-span-4">
                                <Image src="/hero-image.png" alt="Placeholder" className="flex" width={256} height={256} />
                                <p className="mx-auto text-base leading-relaxed text-center">
                                    Start by uploading some PDFs  (drag-n-drop works too). 
                                    1MB max each, 5MB and 100 files max total.<br/> 
                                    <strong>A4</strong> single-page Royal Mail (both Domestic and International), Ebay and ParcelForce are supported. 
                                </p>
                            </div>
                        ) : (
                            pdfPages && pdfPages.map((canvas, index) => (
                                <div key={index}>
                                <p className="mx-auto text-base leading-relaxed text-center">
                                    {canvas.labelType} (L{index + 1})
                                </p>
                                { // eslint-disable-next-line @next/next/no-img-element
                                <img src={canvas.toDataURL()} alt={`Label ${index + 1}, Type: ${canvas.labelType}`} /> }
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}