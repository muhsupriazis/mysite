import { site } from "@/config/site";
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){
    const [isactive, setIsactive] = useState(false);
    return <nav className="p-4 fixed w-full glass">
        <div className="flex justify-between items-center">
            <span className="font-bold font-sofiabold text-3xl">{site.name}</span>
            <div className={isactive? 'toggle flex justify-end z-30 active' : 'flex justify-end toggle z-30'} onClick={()=>setIsactive(!isactive)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={isactive? 'navigasi min-h-screen p-4 text-white bg-black w-[100%] z-20 absolute  top-0 left-0 active': 'navigasi min-h-screen z-20 p-4 text-white bg-black w-full absolute top-0 left-0'}>
            <span className="block py-3 font-sofiabold text-2xl">{site.name}</span>
            <ul className="">
                {site?.navigasi?.map((nav, i)=> <ListItem key={i} url={nav.url}>{nav.menu}</ListItem>)}
            </ul>
            <hr className="my-4"/>
        </div>
    </nav>
}

function ListItem({children, url}){
    return <li className="py-1 text-lg">
        <Link href={url}>{children}</Link>
    </li>
}