import Head from "next/head";
import Navbar from "./navbar";
import { site } from "@/config/site";

export default function Layout({children, title}){
    return <>
    <Head>
        <title>{title? `${site.name} | ${title}` : `${site.name}`}</title>
    </Head>
    <header className="p-4">
        <Navbar/>
    </header>
    {children}
    <footer>
        footer
    </footer>
    </>
}