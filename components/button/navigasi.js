import Link from "next/link";

export default function ButtonNavigasi({children, url}){
    return <Link className="text-lg flex my-5 gap-8 items-center" href={url}><p className="hover:underline hover:decoration-sky-300">{children}</p> <p className="arrow text-2xl font-extralight text-stone-700">&rarr;</p></Link>
}