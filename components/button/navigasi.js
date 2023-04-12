import Link from "next/link";

export default function ButtonNavigasi({children, url}){
    return <Link className="text-xl my-5" href={url}>{children} <span>&rarr;</span></Link>
}