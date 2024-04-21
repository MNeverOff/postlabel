'use client'

import LegalPage from '@/src/app/components/legal/Page';
import Link from 'next/link';

export default function Page() {
    return (
        <LegalPage>
            <h1 className="text-4xl">Terms of Service</h1>
            <p className='text-l'>Last Updated: 21st of April, 2024</p>

            <h3 className='text-3xl'>Acceptance of Terms</h3>
            <p>By accessing and using PostLabel.co ("the Service"), you agree to comply with and be bound by these Terms of Service as well as <Link href='/legal/privacy'>Privacy Policy</Link> and the <Link href='/legal/data'>Data Processing Agreement</Link>.</p>
            
            <h3 className='text-3xl'>Description of Service</h3>
            <p>The Service provides an open-source tool for the extraction of sections of PDFs of post / mailing labels and their combination onto pages of various size (i.e. A4) for printing, tailored for Royal Mail, eBay, ParcelForce, and other services. The entire data processing occurs client-side, never leaving your browser or hitting any of our servers.</p>
            
            <h3 className='text-3xl'>User Responsibilities</h3>
            <p>You are responsible for ensuring the legality of your use of the Service and compliance with relevant laws and regulations.</p>

            <h3 className='text-3xl'>Restrictions on Reselling and Usage Limitations</h3>
            <h4 className='text-xl'>Reselling and Distribution</h4>
            <p>You are expressly prohibited from reselling, embedding, or otherwise distributing the Service to provide similar services to other end users without prior written consent from the Service owner (see Contact section).</p>

            <h4 className='text-xl'>Usage Limitations for Larger Companies</h4>
            <p>The Service is intended for use by individual users and small to medium-sized businesses. Usage by entities classified as "big companies," defined as those with over 100 employees (including contractors and part-time staff) or exceeding £10 million in yearly turnover (or equivalent in other currencies), including their affiliates, holdings, subsidiaries, and related entities, is expressly restricted. The Service reserves the right to determine eligibility for usage based on these criteria and may deny access to the Service to entities falling within this category.</p>

            <h4 className='text-xl'>Enforcement</h4>
            <p>The Service reserves the right to take appropriate legal action to enforce these restrictions and limitations, including but not limited to seeking injunctive relief and pursuing damages for any losses incurred as a result of violations.</p>
            
            <h3 className='text-3xl'>Data Privacy & Processing</h3>
            <p>All data processing, including PDF extraction and analytics, occurs client-side. No personally identifiable information (PII), as per definition of UK ICO, GDPR, UK-GDPR and CCPA is sent or stored on our servers. The only data collected is anonymized analytics data from service providers and usage data for endpoints, detailed in our <Link href="/legal/privacy">Privacy Policy</Link> and <Link href="/legal/data">Data Processing Agreement</Link>.</p>
            
            <h3 className='text-3xl'>Liability</h3>
                <h4 className='text-xl'>Output Quality, Accuracy, and Errors</h4>
                <p>disclaims any liability for the quality, accuracy, or correctness of the output, including but not limited to processed mail/postage labels. The service provides tools for user convenience, and users acknowledge that variations in input data or external factors may affect the output. The Service is not liable for any errors or inaccuracies that may occur during the processing of PDFs or other data. Users acknowledge that the Service processes data based on the provided inputs, and any discrepancies are not the responsibility of the Service.</p>
                <h4 className='text-xl'>Material Losses and User Responsibility</h4>
                <p>The Service denies any liability for material losses, whether factual or potential, arising from the use of the service. This includes, but is not limited to, financial losses, business disruptions, or any other damages resulting from the use or inability to use the service. Users understand and accept that they are solely responsible for verifying the accuracy and appropriateness of the processed output. It is the user's responsibility to review and confirm the processed data before use.</p>
                <h4 className='text-xl'>No Warranty and Limitation of Liability</h4>
                <p>The Service provides the service "as is" without any warranty, express or implied, regarding the accuracy, reliability, or suitability for a particular purpose. Users acknowledge that the Service does not guarantee error-free or uninterrupted service. To the maximum extent permitted by applicable law, the Service shall not be liable for any indirect, consequential, incidental, special, or punitive damages, or for any loss of profits or revenues, whether incurred directly or indirectly.</p>
            
            <h3 className='text-3xl'>Termination</h3>
            <p>We reserve the right to terminate or suspend access to the Service at our discretion for any reason without notice.</p>
            
            <h3 className='text-3xl'>Changes to Terms</h3>
            <p>We may update these Terms of Service from time to time. Your continued use of the Service after changes constitutes acceptance of the updated terms.</p>
            
            <h3 className='text-3xl'>Contact</h3>
            <p>For questions or concerns regarding these Terms of Service, please contact us at <Link href="mailto:contact@postlabel.co">contact@postlabel.co</Link>.</p>
        </LegalPage>
    );
}