import Link from 'next/link';

import { useState, useEffect, useRef } from 'react';

type SidebarContentToggle = {
    title: string;
    link: string;
}

function SidebarContentToggle({ title, link }: SidebarContentToggle) {
    const [isOpen, setIsOpen] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Check if the URL contains an anchor link that matches the id prop
        if (window.location.pathname === `/legal/${link}`) {
            setIsOpen(true);
        }
    }, [link]); // Run this effect when the component mounts and whenever the id prop changes

    return (
        <div ref={sectionRef} className={`rounded-lg p-4 ${isOpen ? ("bg-blue-100") : ''}`}>
            <Link href={link} className={`text-left ${isOpen ? ("font-semibold") : ''}  text-gray-700 pr-2`}>{title}</Link>
        </div>
    );
}

export default function LegalSidenav(classN: { className: string; }) {
    return (
        <div className={classN.className}>
            <SidebarContentToggle link='tldr' title="Too Long & Didn't Read"/> 
            <SidebarContentToggle link='terms' title='Terms & Conditions'/> 
            <SidebarContentToggle link='privacy' title='Privacy Policy'/> 
            <SidebarContentToggle link='data' title='Data Processing Agreement'/> 
        </div>
    )
}