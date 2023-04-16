import ButtonNavigasi from "@/components/button/navigasi";
import H2 from "@/components/heading/heading2";
import Layout from "@/components/layout";
import Paragraph from "@/components/paragraph";
import Project from "@/components/project";
import Span from "@/components/span";
import Link from "next/link";

export default function About(){
    return <Layout title={'About'}>
        <div className="py-16">
        <h1 className="text-5xl py-4 font-sofiabold">About Me</h1>
        <section>
            <Paragraph>Currently I am still a final year student at a university in Makassar. I study a lot programming languages ​but I am more skilled at <Span><Link className="font-sofiamedium" href={'https://developer.mozilla.org/en-US/docs/Web/javascript'}>Javascript</Link></Span>, with this one programming language I can handle frontend and backend applications.</Paragraph>
        </section>
        <section>
            <H2>What can I develop?</H2>
            <div>
                <Project image={'/staticwebsite.jpg'} title={'Static Aplication'} tags={['Landing Page', 'Company Profile', 'Website Portfolio', 'Online Formulir', 'etc']} description={'Websites that have static content, so they only have simple code to build.'}/>
                <Project image={'/dinamic.jpg'} title={'Dinamic Aplication'} tags={['Personal Blog', 'Web Portal', 'E-Commerce', 'E-Learning', 'etc']} description={'Websites that have dynamic content, generally have a database for data storage.'}/>
            </div>
        </section>
        <ButtonNavigasi url={'/blogs'}>Something I once wrote</ButtonNavigasi>
        </div>
    </Layout>
}