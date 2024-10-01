'use client'

import LegalPage from '@/src/app/components/legal/Page';
import Link from 'next/link';

export default function Page() {
    return (
        <LegalPage>
            <h1 className="text-4xl">Too Long & Didn't Read</h1>
                <p className="text-l">
                Last Updated: 1st of October, 2024
                </p>
            <p>The goal of this page is to provide a no-nonsense, simple and human-readable explanation of legal aspects of using this app.</p>

            <h3 className='text-3xl'>What the service is</h3>
            <p>This is a very simplistic app that detects texts on PDFs you upload, tries to guess which service it came from, cuts out a section where it thinks the label will be and then takes all labels cut out and composes a single file with neat and printable labels. Go to <Link href='/legal/terms'>Terms & Conditions</Link> for more details or <Link href="https://github.com/MNeverOff/postlabel">GitHub</Link> for source code.</p>
            
            <h3 className='text-3xl'>Is it free? Can I use it?</h3>
            <p>This app is designed to be used by people and small businesses for the express purpose of label printing. You aren't allowed to resell, embed or otherwise profit from this application without my express and written permission. The usage of the app is also expressly prohibited to "big companies" - over 100 staff or over £10m in yearly turnover. Go to <Link href='/legal/terms'>Terms & Conditions</Link> for more details.</p>

            <h3 className='text-3xl'>How is it ran and where does the data go</h3>
            <p>The app has two components: client-side and server-side. All of the PDF processing happens in the client-side, meaning not a single byte from inside your PDF ever hits the server side. Server side just serves the static page and has TWO API methods (client communication channel): /usage GET and POST.</p>
            <p>That /usage is executed whenever the document is: Processed, Downloaded or Printed. This method collects following data: number of files, number of pages, file size, number of labels and number of labels per type identified, date of event, and a randomly generated UUID that is unique to each page opening event. None of that is PII and it has no content taken from the actual "inside" of the page, only the statistics on usage and label types. The /queryUsage is executed whenever the main page loads to display aggregated stats on number of files and pages processed as well as labels printed/downloaded.</p>
            <p>The random UUID is generated based on User Agent, screen size, current date and a few other non-PII parameters and is then hashed and turned into a string of letters and numbers. Go to <Link href='/legal/privacy'>Privacy Policy</Link> for more details.</p>
            
            <h3 className='text-3xl'>Where is it ran, who else has access</h3>
            <p>The app is ran on Vercel (serverless, stateless) with /usage GET and POST data being stored in Vercel Storage in Germany, Frankfurt. The access to the internet (DNS, reverse proxy) is managed by Cloudflare.</p>
            <p>Both collect "cookieless" analytics, meaning they just take user data and stuff like IP address to then generalise and anonymise it and they never show that stuff to me nor can I request it. They essentially act as an ISP of sorts, so more infrastructure than actual "service".</p>
            <p>There's also the Plausible Community Edition, that is Self-Hosted in a datacenter in Germany, Frankfurt.</p>
            <p>The only information I am able to get that's not entirely generalised is from Vercel's analytics and it's User Agent for a particular request. Go to <Link href='/legal/data'>Data Processing Agreement</Link> for more details.</p>

            <h3 className='text-3xl'>What does it mean that you don't collect PII</h3>
            <p>It means that I never, ever have any access to any information that could, even if taken generally and used in conjunction with other data, be used to identify anyone in particular. And I especially don't mess with PDF data and whatever's inside. It's never even uploaded to the server - it's always only stored on the client-side.</p>
            <p>This broadly means that GDPR, ICO, UK-GDPR, CCPA and other privacy regulation doesn't apply to this app. Go to <Link href='/legal/privacy'>Privacy Policy</Link> and <Link href='/legal/data'>Data Processing Agreement</Link> for more details.</p>
            
            <h3 className='text-3xl'>Who's at fault if it breaks, makes an error or I lose money?</h3>
            <p>The app is "as is" meaning you got to verify the input and output. I'll take no liability if you print off the output, stick it on an envelope without checking that it's going to the correct recipient, and it gets lost or something. Go to <Link href='/legal/terms'>Terms & Conditions</Link> for more details.</p>

            <h3 className='text-3xl'>Do you make money off of it? Why do you do it?</h3>
            <p>No, I do not make money off of it. I got tired of Royal Mail's complacency with bulk label generation and crossed over 100 Photoshop files where I'd go and manually crop out all of the labels to print them on my A4 printer.</p>
            
            <h3 className='text-3xl'>I really want to talk to you! I have a bug report / request / question.</h3>
            <p>You can submit an issue in the <Link href="https://github.com/MNeverOff/postlabel">GitHub Repository</Link> and I'll take a look.</p>
        </LegalPage>
    );
}