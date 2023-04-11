import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({children, title}){
    return <>
    <Head>
        <title>{title? `Muhammad Supri | ${title}` : 'Muhammad Supri'}</title>
    </Head>
    <header>
        <Navbar/>
    </header>
    {children}
    <footer>
        footer
    </footer>
    </>
}