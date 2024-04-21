'use client'

import Link from 'next/link';
import LegalPage from '@/src/app/components/legal/Page';

export default function Page() {
    return (
        <LegalPage>
            <h1 className="text-4xl">Disclaimer: No PII Collection</h1>
            <p>Last Updated: 21st of April, 2024</p>

            <p>This Data Processing Agreement serves to clarify the processing practices of PostLabel.co ("the Service"). We explicitly state that our service does not collect or process Personally Identifiable Information (PII), as defined by the UK ICO, GDPR, UK-GDPR, and CCPA and other relevant Data Protection Regulation & Legislation.</p>

            <h3 className="text-3xl">Data Processing Practices</h3>
            <p>All data processing, including PDF extraction and analytics, occurs client-side, never leaving your browser or hitting any of our servers. The Service does not transmit, store, or process any personally identifiable information on our servers.</p>

            <h3 className="text-3xl">Third-Party Services</h3>
            <p>The Service utilises cookie-less tracking providers that entirely obscure any PII when handling and routing user requests. This includes Cloudflare, Vercel and Plausible.</p>
            <p>For PDF processing, among other things, the Service utilises the <Link href="https://github.com/mozilla/pdf.js" target='_blank'>pdf.js (pdfjs-dist) library</Link> from Mozilla. It introduces an entity of PDF Worker which can be observed on the Network tab - a hosted script file that handles PDF processing. That script file is being downloaded externally from Cloudflare into the User's browser and still processes everything client-side without sending any telemetry or data to Cloudflare or elsewhere.</p>
            <p>Vercel embeds a script on a page that collects user routing information but doesn't pass it onto the Service, nor does it access the content of the page that may include any potentially sensitive PII, including the contents of PDFs.</p>
            <p>Plausible Analytics embeds a script on a page that collects user routing and origin information in an anonymised way without any of the PII.</p>
            <p>Please refer to the privacy policies of <Link href="https://www.cloudflare.com/privacypolicy/" target="_blank">Cloudflare</Link>, <Link href="https://plausible.io/data-policy" target="_blank">Plausible</Link>, <Link href="https://vercel.com/legal/privacy-policy" target="_blank">Vercel</Link> and separately, <Link href="https://vercel.com/docs/analytics/privacy-policy" target="_blank">Vercel Web Analytics</Link> for more information.</p>

            <h3 className="text-3xl">Non-Sensitive Analytics Data</h3>
            <p>The only data collected consists of anonymised analytics data from service providers and usage data for endpoints (collected by the Service itself), detailed in our <Link href="/legal/privacy">Privacy Policy, Logging and Analytics</Link>. 
            This data is non-sensitive and does not include any Personally Identifiable Information as defined in UK ICO, GDPR, UK-GDPR and CCPA.</p>

            <h3 className="text-3xl">Assurance to Users</h3>
            <p>Users can be assured that their privacy is a priority, and our service is designed to minimize data collection, especially avoiding the processing of any personally identifiable information. Furthermore, the code is openly available on <Link href="https://github.com/MNeverOff/postlabel">GitHub</Link>.</p>

            <h3 className="text-3xl">Legal Compliance</h3>
            <p>This disclaimer aligns with legal requirements, ensuring transparency and providing users with clear information about the nature of data processing undertaken by the Service.</p>
        </LegalPage>
    );
}