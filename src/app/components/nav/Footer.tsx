import Link from 'next/link';
import AppLogo from '@/src/app/components/nav/AppLogo';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-gray-600 m-6 body-font">
            <div className="container p-4 mx-auto flex items-center sm:flex-row flex-col shadow-lg rounded-lg">
                <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
                    <AppLogo />
                    <span className="ml-3 text-xl">PostLabel</span>
                </Link>
                <span className="md:text-start text-center text-sm shrink text-gray-500 sm:ml-4 sm:pl-4 md:border-l-2 sm:border-gray-200 md:py-2 md:mt-0 mt-4">© 2023 - {currentYear} PostLabel.co —
                    <Link className="text-gray-600 ml-1" target="_blank" href="https://neveroff.dev">Mike Neverov</Link>
                </span>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <Link className="ml-3 text-gray-500" href="https://neveroff.dev" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    </Link>
                    <Link className="ml-3 text-gray-500" href="https://github.com/MNeverOff/postlabel" target="_blank">
                        <svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M11.9642 0C5.34833 0 0 5.38776 0 12.0531C0 17.3811 3.42686 21.8912 8.18082 23.4874C8.77518 23.6074 8.9929 23.2281 8.9929 22.909C8.9929 22.6296 8.97331 21.6718 8.97331 20.6738C5.64514 21.3923 4.95208 19.237 4.95208 19.237C4.41722 17.8401 3.62473 17.4811 3.62473 17.4811C2.53543 16.7427 3.70408 16.7427 3.70408 16.7427C4.91241 16.8225 5.54645 17.9799 5.54645 17.9799C6.61592 19.8157 8.33927 19.297 9.03257 18.9776C9.13151 18.1993 9.44865 17.6606 9.78539 17.3613C7.13094 17.0819 4.33812 16.0442 4.33812 11.4144C4.33812 10.0974 4.81322 9.01984 5.56604 8.1818C5.44727 7.88253 5.03118 6.64506 5.68506 4.98882C5.68506 4.98882 6.69527 4.66947 8.97306 6.22604C9.94827 5.9622 10.954 5.82799 11.9642 5.82686C12.9744 5.82686 14.0042 5.96669 14.9552 6.22604C17.2332 4.66947 18.2434 4.98882 18.2434 4.98882C18.8973 6.64506 18.481 7.88253 18.3622 8.1818C19.1349 9.01984 19.5904 10.0974 19.5904 11.4144C19.5904 16.0442 16.7976 17.0618 14.1233 17.3613C14.5592 17.7404 14.9353 18.4587 14.9353 19.5962C14.9353 21.2126 14.9158 22.5098 14.9158 22.9087C14.9158 23.2281 15.1337 23.6074 15.7278 23.4877C20.4818 21.8909 23.9087 17.3811 23.9087 12.0531C23.9282 5.38776 18.5603 0 11.9642 0Z"/>
                        </svg>
                    </Link>
                    <Link className="ml-3 text-gray-500" href="https://twitter.com/MNeverOff" target="_blank">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                    </Link>
                    <Link className="ml-3 text-gray-500" href="https://www.linkedin.com/in/mneveroff/" target="_blank">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </Link>
                </span>
            </div>
        </footer>
    )
}