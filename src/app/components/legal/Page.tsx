'use client'

import LegalSidenav from '@/src/app/components/legal/SideNav';

type LegalPageProps = {
    children: React.ReactNode;
};

export default function LegalPage({ children }: LegalPageProps) {
    return (
        <section className="bg-white flex-grow m-6">
            <div className="flex flex-wrap mx-auto">
                <div className="container mx-auto grid grid-cols-12 md:gap-x-12 gap-y-12">
                    <LegalSidenav className="col-span-12 md:col-span-3" />
                    <div className="col-span-12 md:col-span-9 space-y-4">{children}</div>
                </div>
            </div>
        </section>
    );
}