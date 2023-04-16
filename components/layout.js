import Head from "next/head";
import Navbar from "./navbar";
import { site } from "@/config/site";
import Link from "next/link";
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin,FiGithub } from "react-icons/fi";

export default function Layout({children, title}){
    return <>
    <Head>
        <title>{title?  `${title} | ${site.name}`  : `${site.name}`}</title>
    </Head>
    <header className="relative z-20">
        <Navbar/>
    </header>
    <main className="p-4">
        {children}
    </main>
    <footer className="bg-amber-100 hidden w-full bottom-0">
        <ul className="flex justify-center">
            <ListItem url={'#'}><FiInstagram className="text-2xl"/></ListItem>
            <ListItem url={'#'}><FiTwitter className="text-2xl"/></ListItem>
            <ListItem url={'#'}><FiFacebook className="text-2xl"/></ListItem>
            <ListItem url={'#'}><FiLinkedin className="text-2xl"/></ListItem>
            <ListItem url={'#'}><FiGithub className="text-2xl"/></ListItem>
        </ul>
    </footer>
    </>
}

function ListItem({children, url}){
    return <li className="grow text-center flex justify-center text-neutral-600"><Link className="text-4xl block p-5" href={url}>{children}</Link></li>
}