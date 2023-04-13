import { site } from "@/config/site";
import Link from "next/link";
import { useState } from "react";
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin,FiGithub } from "react-icons/fi";

export default function Navbar(){
    const [isactive, setIsactive] = useState(false);
    return <>

    <nav className="p-4 fixed w-full glass">
        <div className="flex justify-between items-center">
            <span className="font-bold font-sofiabold text-4xl">{site.name}</span>
            <div className={isactive? 'toggle flex justify-end z-30 active' : 'flex justify-end toggle z-30'} onClick={()=>setIsactive(!isactive)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={isactive? 'navigasi min-h-screen p-4 text-white bg-black w-[100%] z-20 absolute  top-0 left-0 active': 'navigasi min-h-screen z-20 p-4 text-white bg-black w-full absolute top-0 left-0'}>
            <span className="block py-3 font-sofiabold text-3xl">{site.name}</span>
            <ul className="">
                {site?.navigasi?.map((nav, i)=> <ListItem key={i} url={nav.url}>{nav.menu}</ListItem>)}
            </ul>
            <hr className="my-4"/>
            <ul className="flex justify-center gap-4 py-4">
                <li><Link href={'#'}><FiInstagram className="text-xl"/></Link></li>
                <li><Link href={'#'}><FiTwitter className="text-xl"/></Link></li>
                <li><Link href={'#'}><FiFacebook className="text-xl"/></Link></li>
                <li><Link href={'#'}><FiLinkedin className="text-xl"/></Link></li>
                <li><Link href={'#'}><FiGithub className="text-xl"/></Link></li>
            </ul>
        </div>
    </nav>
    {!isactive && 
    <div className="bg-amber-50 fixed w-full bottom-0 left-0">
        <ul className="flex justify-center">
            <ListSocial url={'#'}><FiInstagram className="text-lg"/></ListSocial>
            <ListSocial url={'#'}><FiTwitter className="text-lg"/></ListSocial>
            <ListSocial url={'#'}><FiFacebook className="text-lg"/></ListSocial>
            <ListSocial url={'#'}><FiLinkedin className="text-lg"/></ListSocial>
            <ListSocial url={'#'}><FiGithub className="text-lg"/></ListSocial>
        </ul>
    </div>
    }
    </>
}

function ListItem({children, url}){
    return <li className="py-1">
        <Link className="text-lg" href={url}>{children}</Link>
    </li>
}

function ListSocial({children, url}){
    return <li className="grow text-center flex justify-center text-neutral-600"><Link className="text-4xl block p-5" href={url}>{children}</Link></li>
}