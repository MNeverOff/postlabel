import Image from 'next/image';

export default function AppLogo() {
    return (
        <Image src="/app-logo.png" alt="PostLabel Logo" width={64} height={64}/>
    )
}