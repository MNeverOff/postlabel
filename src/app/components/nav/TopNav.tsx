import Link from 'next/link';
import AppLogo from '@/src/app/components/nav/AppLogo';

export default function TopNav() {
    return (
        <header className="text-gray-600 m-6 body-font">
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center shadow-lg rounded-lg">
                <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                    <AppLogo />
                    <span className="ml-3 text-xl">PostLabel</span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <Link className="md:mr-5 mr-0 hover:text-gray-900 cursor-pointer" href="/print">A4 Printer</Link>
                </nav>
                <nav className="inline-flex md:ml-4 md:py-1 md:pl-4 items-center py-1 px-3 focus:outline-none flex-wrap text-base mt-4 md:mt-0 justify-center space-x-4">
                    <Link className="mx-auto hover:text-gray-900 cursor-pointer" href="/about">About</Link>
                    <Link className="mx-auto hover:text-gray-900 cursor-pointer" href="/legal/tldr">Legal</Link>
                </nav>
            </div>
        </header>
    )
}