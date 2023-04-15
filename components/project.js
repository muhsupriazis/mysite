import Image from "next/image";
import H3 from "./heading/heading3";
import Tag from "./tag";

export default function Project({image, title, description, tags}){
    return <div className="relative rounded-md overflow-hidden my-6">
        <Image src={image} alt={image} width={500} height={500}/>
        <div className="min-h-full p-8 bg-gradient-to-b flex text-white items-end from-transparent to-black  min-w-full absolute top-0">
            <div>
            <H3>{title}</H3>
            <p>{description}</p>
            {tags &&
            <div className="text-black my-4 flex flex-wrap gap-2">
                {tags.map((tag, i)=> <Tag key={i}>{tag}</Tag>)}
            </div>
            }
            </div>
        </div>
    </div> 
}