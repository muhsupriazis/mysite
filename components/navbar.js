import { site } from "@/config/site";
import Link from "next/link";
import { useState } from "react";
import { TbBrandGithub, TbBrandInstagram, TbBrandTwitter, TbBrandLinkedin, TbBrandFacebook  } from "react-icons/tb";

export default function Navbar(){
    const [isactive, setIsactive] = useState(false);
    return <nav>
        <div className="flex justify-between items-center">
            <span className="font-bold font-calibre text-2xl">{site.name}</span>
            <div className={isactive? 'toggle flex justify-end z-10 active' : 'flex justify-end toggle z-10'} onClick={()=>setIsactive(!isactive)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={isactive? 'navigasi min-h-screen p-4 text-white bg-black w-full absolute top-0 left-0 active': 'navigasi min-h-screen p-4 text-white bg-black w-full absolute top-0 left-0'}>
            <span className="block py-3 font-calibre text-2xl">{site.name}</span>
            <ul className="">
                {site?.navigasi?.map((nav, i)=> <ListItem key={i} url={nav.url}>{nav.menu}</ListItem>)}
            </ul>
            <hr className="my-4"/>
            <ul className="flex gap-4 text-3xl justify-center">
                {site?.social?.map((media, i)=> <li key={i}><Link href={media.url}><span className="text-3xl">{media.icon}</span></Link></li>)}
            </ul>
        </div>
    </nav>
}

function ListItem({children, url}){
    return <li className="py-1">
        <Link href={url}>{children}</Link>
    </li>
}