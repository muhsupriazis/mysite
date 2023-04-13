import { site } from "@/config/site";
import Link from "next/link";
import { useState } from "react";
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin,FiGithub } from "react-icons/fi";

export default function Navbar(){
    const [isactive, setIsactive] = useState(false);
    return <>

    <nav className="p-4 fixed w-full glass">
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
    {!isactive && 
    <div className="bg-amber-100 fixed w-full bottom-0 left-0">
        <ul className="flex justify-center">
            <ListSocial url={'#'}><FiInstagram className="text-2xl"/></ListSocial>
            <ListSocial url={'#'}><FiTwitter className="text-2xl"/></ListSocial>
            <ListSocial url={'#'}><FiFacebook className="text-2xl"/></ListSocial>
            <ListSocial url={'#'}><FiLinkedin className="text-2xl"/></ListSocial>
            <ListSocial url={'#'}><FiGithub className="text-2xl"/></ListSocial>
        </ul>
    </div>
    }
    </>
}

function ListItem({children, url}){
    return <li className="py-1 text-xl">
        <Link href={url}>{children}</Link>
    </li>
}

function ListSocial({children, url}){
    return <li className="grow text-center flex justify-center text-neutral-600"><Link className="text-4xl block p-5" href={url}>{children}</Link></li>
}