import Image from 'next/image';
import Link from 'next/link';
import StatCounter from '@/src/app/components/StatCounter';

export default function Home() {
    return (
        <main className="">
            <section className="text-gray-600 body-font flex">
                <div className="container mx-auto flex px-4 py-12 mb-8 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Print your postage labels in bulk
                            <br className="hidden lg:inline-block" /> just like that
                        </h1>
                        <p className="mb-8 leading-relaxed">This tool has been built out of annoyance for single-page labels.<br className='mb-1' /> It takes your Royal Mail, Ebay and ParcelForce PDFs with one label per page and creates neat, immediately printable A4 pages with <strong>four</strong> labels on each page. Easy. Done.</p>
                        <div className="flex justify-center mb-8">
                            <Link href="/print" className="">
                                <button className="cursor-pointer inline-flex text-gray-900 bg-gray-100 shadow-md border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Print some labels!</button>
                            </Link>
                        </div>
                        <p className="leading-relaxed text-lg"><span className="font-semibold">Privately</span>, in your browser.</p>
                        <p className="leading-relaxed text-lg">No server, <span className="font-semibold">no personal data logging.</span></p>
                        <p className="leading-relaxed text-lg">Open Source, available on <Link href="https://github.com/MNeverOff/postlabel">GitHub
                            </Link>.</p>
                        <StatCounter />
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image src="/landing-image-01-compressed.png" width={512} height={512} className="object-cover object-center rounded" alt="Image showing many single-label pages turning to a page with many labels" />
                    </div>
                </div>
            </section>
            <section className="text-gray-600  bg-slate-100 body-font">
                <div className="container px-4 py-12 mb-8 mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">How it works</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">If you want to know how to print Royal Mail, Ebay or ParcelForce labels in bulk on one A4 page - read on! This tool allows you to take single-label pages that Royal Mail, Ebay and ParcelForce create by default and merge them on an A4 page for easy printing.</p>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6" /><path d="M14 3v5h5M18 21v-6M15 18h6" />
                            </svg>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Upload the PDFs</h2>
                            <p className="leading-relaxed text-base">You take your PDF files and upload them all. You can upload multiple files and each file can have multiple pages. They can mix and match between Royal Mail, Ebay and ParcelForce.</p>
                            <Link className="mt-3 text-indigo-500 inline-flex items-center" href="/about">
                                Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The ✨ Magic ✨ happens </h2>
                            <p className="leading-relaxed text-base">PostLabel.co takes your PDFs, scans them page by page, detects which type of page it sees (between RM, RM International, Ebay and ParcelForce) using some very dumb text detection, then it chops it out and saves as an image to use in the next step.</p>
                            <Link className="mt-3 text-indigo-500 inline-flex items-center" href="/about">
                                Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                <polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>
                            </svg>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Combined PDF is ready - download or print?</h2>
                            <p className="leading-relaxed text-base">After running the tool ("Extract" button) you'll get an option first check how the detection and cropping worked and subsequently to download or print a page with your postal labels in bulk, four per page, on however many pages it took.</p>
                            <Link className="mt-3 text-indigo-500 inline-flex items-center" href="/about">
                                Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-4 py-12 mx-auto">
                    <div className="text-center mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Disclaimers & Acknowledgements</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">This tools doesn't collect your files, everything is processed in memory. There's no file storage, no user-data logging. Go to the <Link href='/legal/tldr'>Legal Section</Link> for more articulate details.</p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">No storage of your data whatsoever</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Neither file storage nor database storage of the PDFs</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">There's also no accounts or sessions</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Always check your files before print</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Open Source, see <Link href="https://github.com/MNeverOff/postlabel">GitHub</Link></span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">No cookies, PII or other GDPR stuff - I just don't collect it.</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto pt-2">
                            Cheers to <Link href="https://vercel.com/" target="_blank">Vercel</Link> for Next.js and free hosting, <Link href="https://github.com/mertJF/tailblocks" target="_blank">Mert Cukuren </Link> for these Tailwind CSS templates and <Link href="https://github.com/mozilla/pdf.js" target="_blank">Mozilla</Link> with <Link href="https://github.com/parallax/jsPDF" target="_blank">James Hall</Link> for pdf processing libs and many others for wonderful things like React, file-saver package and so on and so forth.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}