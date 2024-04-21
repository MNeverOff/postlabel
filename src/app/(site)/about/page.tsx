'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ExpandableSectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
}

function ExpandableSection({ id, title, children }: ExpandableSectionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Check if the URL contains an anchor link that matches the id prop
        if (window.location.hash === `#${id}`) {
            setIsOpen(true);
            // Scroll to the section
            if (sectionRef.current) {
                sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [id]); // Run this effect when the component mounts and whenever the id prop changes

    return (
        <div id={id} ref={sectionRef} className="border-2 border-gray-100 rounded-lg">
            <button 
                className="flex items-center justify-between w-full p-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h1 className="text-left font-semibold text-gray-700 pr-2">{title}</h1>
                <span className="text-gray-400 bg-gray-200 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 12h12" : "M18 10l-6 6-6-6"} />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <>
                    <hr className="border-gray-200"/>
                    <div className="p-4 text-gray-600 space-y-2">{children}</div>
                </>
            )}
        </div>
    );
}

export default function Page() {
    return (
        <section className="bg-white m-6 flex-grow">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-8 text-gray-700">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4 pb-4">Your Questions Answered</h1>
                    <p className="text-base leading-relaxed mx-auto">This page serves two purposes - for me to document some oddities or specifics as well as write a half-decent manual on how to bulk export post labels from Royal Mail, Ebay and ParcelForce AND also boost up the SEO of the page. That's how it's done, right?</p>
                </div>

                <div className="mt-12 space-y-8">
                    <ExpandableSection id="data-handling" title="How is my data handled? Is it stored or sold?">
                        <p>PostLabel.co does not sore any PII outside of what GDPR and most regulators consider "strictly necessary". Basically, we only store your session details that Cloudflare has logged to prevent DDoS and other nasty stuff and what Vercel shows for performance & usage analytics. We also use self-hosted Plausible Analytics that doesn't collect any PII. Go to <Link href='/legal/tldr'>Legal Section</Link> for more details.</p>
                    </ExpandableSection>

                    <ExpandableSection id="source-code" title="Can I make sure of it? Where is the source code?">
                        <p>PostLabel.co is available as an MIT-Licensed open-source and free solution that you can run locally if you so desire, or check whether the implementation conforms to your expectations. Navigate to the  <Link href='https://github.com/MNeverOff/postlabel'>GitHub Repository</Link> for more details.</p>
                    </ExpandableSection>

                    <ExpandableSection id="royal-mail-formats" title="My Royal Mail label is not aligned / cropped correctly, what do I do?">
                        <p>It seems like Royal Mail is making some changes recently and effectively have four different formats now:</p>
                        <ul className="list-disc pl-4">
                            <li>Royal Mail Web Click & Collect - "All documents" file. Has instructions and 1 labels per page, 2 if international.</li>
                            <li>Royal Mail Web Click & Collect - "Label" file. Has 1 label per page, arranged in one out of 4 corners (user-selectable).</li>
                            <li>Royal Mail Mobile Click & Collect - "View Label" file. Has 1 label per page, top-left corner with DIFFERENT margins to Web "Label" option.</li>
                            <li>Royal Mail Mobile Click & Collect - "View Documents" file generated right after checkout. Identical to the Web "All documents" option.</li>
                        </ul>
                        <p><strong>The tool is currently capable of processing 3/4 types</strong>: Web All Documents, Mobile "View Label" and Mobile "View Documents".</p>
                        <p>The new, latest Web "Label" file where you have to select a corner for the label to go in is NOT supported as it has a slightly different alignment.</p>
                        <Image className="flex flex-grow mx-auto" width={256} height={256}  src="/rm-unsupported-type.png" alt="Image depicting unsupported Royal Mail Label Type" />
                    </ExpandableSection>

                    <ExpandableSection id="working-on-ios" title="The tool doesn't seem to work on my iPhone / iPad / other mobile device!">
                        <p>Basically there are two issues with mobile devices: they often can't "save" a blob content (and that's what is generated when you press "download", remember, no file storage?) as file. And they can't print the page as they don't like iframes.</p>
                        <p>The solution that I found to that was using <strong>Download PDF</strong> and then using a system Print dialog from there. And in THAT Print dialog, at least on iOS you can both print (as expected) AND save to PDF. Hope this helps.</p>
                    </ExpandableSection>

                    <ExpandableSection id="questions-concerns-suggestions" title="I have a question / concern / suggestion / feature request. How can I reach you?">
                        <p>For questions or concerns regarding these Terms of Service, please contact us at <Link href="mailto:contact@postlabel.co">contact@postlabel.co</Link>. You can also @ me at <Link href="https://mas.to/@MNeverOff" target='_blank'>@MNeverOff@mas.to</Link> or <Link href="https://twitter.com/MNeverOff" target="_blank">@MNeverOff</Link> if you fancy that.</p>
                    </ExpandableSection>
                </div>
            </div>
        </section>
    );
}