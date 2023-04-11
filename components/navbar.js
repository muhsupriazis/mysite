import { site } from "@/config/site";
import Link from "next/link";

export default function Navbar(){
    return <nav>
        <ul>
            {site?.navigasi?.map((nav, i)=> <ListItem key={i} url={nav.url}>{nav.menu}</ListItem>)}
        </ul>
    </nav>
}

function ListItem({children, url}){
    return <li>
        <Link href={url}>{children}</Link>
    </li>
}