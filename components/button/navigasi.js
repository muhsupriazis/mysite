import { useRouter } from "next/router"

export default function ButtonNavigasi({children, url}){
    const router = useRouter()
    return <button className="bg-black text-white p-2 rounded my-4" onClick={()=>router.push(url)}  >{children}</button>
}