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
            <Paragraph>Saat ini saya seorang mahasiswa akhir di Universitas Handayani Makassar. Saya belajar banyak bahasa pembrograman, tapi saya lebih bangga mengatakan saya bisa <Span><Link className="font-sofiamedium" href={'https://developer.mozilla.org/en-US/docs/Web/javascript'}>Javascript</Link></Span>, dengan bahasa ini saya bisa membuat aplikasi backend dan frontend.</Paragraph>
        </section>
        <section>
            <H2>What can I develop?</H2>
            <div className="md:grid grid-cols-2 md:gap-6 lg:gap-8">
                <Project image={'/staticwebsite.jpg'} title={'Static Aplication'} tags={['Landing Page', 'Company Profile', 'Website Portfolio', 'Online Formulir', 'etc']} description={'Website dengan halaman yang tetap, tidak memiliki aplikasi backend yang kompleks.'}/>
                <Project image={'/dinamic.jpg'} title={'Dinamic Aplication'} tags={['Personal Blog', 'Web Portal', 'E-Commerce', 'E-Learning', 'etc']} description={'Website dengan halama yang dinamis, umumnya memiliki database dan fitur create, read, update dan delete.'}/>
            </div>
        </section>
        <ButtonNavigasi url={'/blogs'}>Artikel yang saya tulis</ButtonNavigasi>
        </div>
    </Layout>
}