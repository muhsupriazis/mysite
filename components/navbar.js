import { site } from "@/config/site";
import Link from "next/link";
import { useState } from "react";
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin,FiGithub, FiMail } from "react-icons/fi";

export default function Navbar(){
    const [isactive, setIsactive] = useState(false);
    return <>
    <div className="hidden md:block">
        <nav>
        <div className="flex justify-between items-center">
                <span className="block py-3 font-sofiabold text-3xl md:text-4xl">{site.name}</span>
                <ul className="flex gap-4">
                    {site?.navigasi?.map((nav, i)=> <ListItem key={i} url={nav.url}>{nav.menu}</ListItem>)}
                </ul>
            </div>
        </nav>
    </div>
    <div className="md:hidden">
        <nav className="p-4 fixed w-full glass">
            <div className="flex justify-between items-center">
                <Link href={'/'}><span className="font-bold font-sofiabold text-4xl">{site.name}</span></Link>
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
                    <li><Link href={'https://www.instagram.com/muhsupriazis/'}><FiInstagram className="text-xl"/></Link></li>
                    <li><Link href={'https://twitter.com/muhsupriazis'}><FiTwitter className="text-xl"/></Link></li>
                    <li><Link href={'mailto:muhsupriazis@gmail.com'}><FiMail className="text-xl"/></Link></li>
                    <li><Link href={'https://www.facebook.com/muhammadsupriazis'}><FiFacebook className="text-xl"/></Link></li>
                    <li><Link href={'https://www.linkedin.com/in/muhsupriazis'}><FiLinkedin className="text-xl"/></Link></li>
                    <li><Link href={'https://github.com/muhsupriazis'}><FiGithub className="text-xl"/></Link></li>
                </ul>
            </div>
        </nav>
        {!isactive && 
        <div className="bg-amber-50 fixed w-full bottom-0 left-0">
            <ul className="flex justify-center">
                <ListSocial url={'https://www.instagram.com/muhsupriazis/'}><FiInstagram className="text-lg"/></ListSocial>
                <ListSocial url={'https://twitter.com/muhsupriazis'}><FiTwitter className="text-lg"/></ListSocial>
                <ListSocial url={'mailto:muhsupriazis@gmail.com'}><FiMail className="text-lg"/></ListSocial>
                <ListSocial url={'https://www.facebook.com/muhammadsupriazis'}><FiFacebook className="text-lg"/></ListSocial>
                <ListSocial url={'https://www.linkedin.com/in/muhsupriazis'}><FiLinkedin className="text-lg"/></ListSocial>
                <ListSocial url={'https://github.com/muhsupriazis'}><FiGithub className="text-lg"/></ListSocial>
            </ul>
        </div>
        }
    </div>
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