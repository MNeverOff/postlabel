'use client'

import Link from 'next/link';
import LegalPage from '@/src/app/components/legal/Page';

export default function Page() {
    return (
        <LegalPage>
            <h1 className="text-4xl">Privacy Policy</h1>
                <p className="text-l">
                    Last Updated: 21st of April, 2024
                </p>
            <h3 className="text-3xl">Overview</h3>
            <p>This Privacy Policy outlines how PostLabel.co ("the Service") manages and processes user information. By using the Service, you agree to the terms outlined in this Privacy Policy.</p>

            <h3 className="text-3xl">Data Processing and Privacy Practices</h3>
            <p>All data processing, including PDF extraction and analytics, occurs client-side. No personally identifiable information (PII) is sent or stored on our servers. The only data collected is anonymized analytics data detailed in our <Link href="/legal/data">Data Processing Agreement</Link> as referenced in our <Link href="/legal/terms">Terms of Service</Link>.</p>

            <h3 className="text-3xl">Logging and Analytics</h3>
            <p>The Service employs Cloudflare Cookieless Logging, Vercel Cookieless Analytics and Plausible Cookieless Analytics, all of which do not capture IP addresses or other PII. A custom endpoint, /recordUsage, collects non-PII analytics data triggered during Processing, Downloading, and Printing events and /queryUsage retrieves it for display in UI in aggregated fashion. It only ever contains the following data: number of files, number of pages, file size, number of labels and number of labels per type identified, date of event, and a randomly generated UUID that is unique to each page opening event.</p>

            <h3 className="text-3xl">Analytics Storage</h3>
            <p>Analytics data from the /recordUsage endpoint is stored in a persistent database within the EU, currently located in Germany, Frankfurt and operated by <Link href="https://vercel.com/" target='_blank'>Vercel</Link>.</p>

            <h3 className='text-3xl'>Hosting and Server Location, Application Logging</h3>
            <p>The Service is hosted on <Link href="https://vercel.com/" target='_blank'>Vercel</Link>, a serverless and stateless environment, in the UK, London datacenter. No access to router logs is available, and Vercel logs do not include PII but instead only includes User Agent.</p>

            <h3 className="text-3xl">Third-Party Services</h3>
            <p>The Service may use third-party services for analytics and logging, each governed by its own privacy policy. Please refer to our <Link href="/legal/data">Data Processing Agreement</Link> and the privacy policies of <Link href="https://www.cloudflare.com/privacypolicy/" target="_blank">Cloudflare</Link>, <Link href="https://plausible.io/data-policy" target="_blank">Plausible</Link> and <Link href="https://vercel.com/legal/privacy-policy" target="_blank">Vercel</Link> for more information.</p>

            <h3 className="text-3xl">User Agent Information</h3>
            <p>Logs collected by Vercel only capture User Agent information, e.g., "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36." which falls outside of PII as defined by GDPR and CCPA and other privacy regulation legislation.</p>

            <h3 className="text-3xl">User Data Rights</h3>
            <p>You, as a User, are within your rights not to use the Service. As we store no PII as defined in our <Link href="/legal/data">Data Processing Agreement</Link>, we are unable to execute on any Data Protection, Removal or other requests related to Data Subject Rights as we don't store any nor have any option to determine which data would need to be exported or removed as the result of the above.</p>

            <h3 className="text-3xl">Security Measures</h3>
            <p>The Service complies with all latest security measures and practices. All Third-Party Services are protected with multi-factor authentication, as for the credentials for the Analytics Storage - these are held securely and never shared with anyone. Furthermore, the code is openly available on <Link href="https://github.com/MNeverOff/postlabel">GitHub</Link>.</p>

            <h3 className="text-3xl">Contact Information</h3>
            <p>For any questions or concerns regarding this Privacy Policy, please contact us at <Link href="mailto:contact@postlabel.co">contact@postlabel.co</Link>.</p>
        </LegalPage>
    );
}