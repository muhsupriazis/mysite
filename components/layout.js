import Head from "next/head";
import Navbar from "./navbar";
import { site } from "@/config/site";
import Link from "next/link";

export default function Layout({children, title}){
    return <>
    <Head>
        <title>{title? `${site.name} | ${title}` : `${site.name}`}</title>
    </Head>
    <header className="p-4">
        <Navbar/>
    </header>
    {children}
    <footer className="bg-black text-white px-4 py-8">
        <section className="mb-4">
            <h2 className="text-xl my-2">Contact</h2>
            <ul>
                {site.social.map((media, i)=> <ListItem key={i} url={media.url}>{media.name}</ListItem>)}
            </ul>
        </section>
        <section>
            <h2 className="text-xl my-2">Navigasi</h2>
            <ul>
                {site.navigasi.map((nav, i)=> <ListItem key={i} url={nav.url}>{nav.menu}</ListItem>)}
            </ul>
        </section>
        <p className='my-4'>Muhammad Supri &#169; {new Date().getFullYear()}. All Rigths Reserved.</p>
    </footer>
    </>
}

function ListItem({children, url}){
    return <li className="text-slate-200"><Link href={url}>{children}</Link></li>
}