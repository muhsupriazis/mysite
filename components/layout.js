import Head from "next/head";
import Navbar from "./navbar";
import { site } from "@/config/site";
import Link from "next/link";
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin,FiGithub, FiMail } from "react-icons/fi";


export default function Layout({children, title}){
    return <>
    <Head>
        <title>{title?  `${title} | ${site.name}`  : `${site.name}`}</title>
    </Head>
    <header className="relative z-20 md:px-8 lg:px-32 md:pt-7 lg:pt-12 md:pb-4 border-b-[1px] border-solid">
        <Navbar/>
    </header>
    <main className="p-4 md:px-8 lg:px-60">
        {children}
    </main>
    <footer className="hidden lg:block w-full bottom-0">
        <ul className="flex fixed left-28 flex-col bottom-0 justify-center items-center gap-4">
            <li><Link href={'https://www.instagram.com/muhsupriazis/'}><FiInstagram className="text-2xl"/></Link></li>
            <li><Link href={'https://twitter.com/muhsupriazis'}><FiTwitter className="text-2xl"/></Link></li>
            <li><Link href={'mailto:muhsupriazis@gmail.com'}><FiMail className="text-2xl"/></Link></li>
            <li><Link href={'https://www.facebook.com/muhammadsupriazis'}><FiFacebook className="text-2xl"/></Link></li>
            <li><Link href={'https://www.linkedin.com/in/muhsupriazis'}><FiLinkedin className="text-2xl"/></Link></li>
            <li><Link href={'https://github.com/muhsupriazis'}><FiGithub className="text-2xl"/></Link></li>
            <div className="h-[200px] bg-slate-500 w-[1px]"></div>
        </ul>
        <div className="flex flex-col gap-4 fixed right-28 items-center bottom-0">
            <Link href={'mailto:muhsupriazis@gmail.com'} className="rotate-90 w-3 relative text-lg -top-48 font-semibold">muhsupriazis@gmail.com</Link>
            <div className="h-[200px] bg-slate-500 w-[1px]"></div>
        </div>
    </footer>
    </>
}

function ListItem({children, url}){
    return <li className="grow text-center flex justify-center text-neutral-600"><Link className="text-4xl block p-5" href={url}>{children}</Link></li>
}