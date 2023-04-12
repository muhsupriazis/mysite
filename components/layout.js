import Head from "next/head";
import Navbar from "./navbar";
import { site } from "@/config/site";
import Link from "next/link";

export default function Layout({children, title}){
    return <>
    <Head>
        <title>{title? `${site.name} | ${title}` : `${site.name}`}</title>
    </Head>
    <header>
        <Navbar/>
    </header>
    <main className="p-4">
        {children}
    </main>
    <footer className="fixed bottom-0">
        <ul className="flex">
            {/* {site.social.map((media, i)=> <ListItem key={i} url={media.url}>{media.icon}</ListItem>)} */}
        </ul>
    </footer>
    </>
}

function ListItem({children, url}){
    return <li className="text-2xl"><Link className="text-4xl" href={url}>{children}</Link></li>
}