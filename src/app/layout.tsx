import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import '@/src/app/globals.css'
const inter = Inter({ subsets: ['latin'] })

import TopNav from '@/src/app/components/nav/TopNav'
import Footer from '@/src/app/components/nav/Footer'

const title = 'PostLabel - Easy bulk printing of postage labels';
const description = 'PostLabel is a simple web tool for bulk postage labels printing for Royal Mail, Ebay and ParcelForce.';

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        images: [
            {
                url: 'https://postlabel.neveroff.dev/landing-image-open-graph-01-compressed.png',
                width: 1200,
                height: 630,
                alt: 'PostLabel Example',
            },
        ],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex min-h-screen flex-col justify-between gap-6 bg-white`}>
                <TopNav />
                {children}
                <Analytics />
                <Footer />
                <script defer data-domain="postlabel.neveroff.dev" src="https://plausible.devguild.ltd/js/script.js"></script>
            </body>
        </html>
    )
}