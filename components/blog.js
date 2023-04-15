import Link from "next/link";
import Span from "./span";
import Paragraph from "./paragraph";
import H3 from "./heading/heading3";
import ButtonNavigasi from "./button/navigasi";

export default function Blog({summary, title, url, time}){
    return <article className="border-solid border-t-[1px] py-4">
        <H3 className="font-sofiabold text-2xl">{title}</H3>
        <time className="text-neutral-500">{time}</time>
        <Paragraph className="text-lg">{summary}</Paragraph>
        <ButtonNavigasi url={url}>Read More</ButtonNavigasi>
    </article>
}