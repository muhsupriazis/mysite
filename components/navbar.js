import { site } from "@/config/site";
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){
    const [isactive, setIsactive] = useState(false);
    return <nav>
        <div className="flex justify-between items-center">
            <span className="font-bold">{site.name}</span>
            <div className={isactive? 'toggle z-10 active' : 'toggle z-10'} onClick={()=>setIsactive(!isactive)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={isactive? 'navigasi min-h-screen p-4 text-white bg-black w-full absolute top-0 left-0 active': 'navigasi min-h-screen p-4 text-white bg-black w-full absolute top-0 left-0'}>
            <span className="block py-3">{site.name}</span>
            <ul className="">
                {site?.navigasi?.map((nav, i)=> <ListItem key={i} url={nav.url}>{nav.menu}</ListItem>)}
            </ul>
            <hr className="my-4"/>

        </div>
    </nav>
}

function ListItem({children, url}){
    return <li className="py-1">
        <Link href={url}>{children}</Link>
    </li>
}