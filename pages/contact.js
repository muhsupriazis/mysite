import ButtonNavigasi from "@/components/button/navigasi";
import ButtonSubmit from "@/components/button/submit";
import InputText from "@/components/input/text";
import TextArea from "@/components/input/textarea";
import Layout from "@/components/layout";
import Paragraph from "@/components/paragraph";
import Span from "@/components/span";
import Link from "next/link";

export default function Contact(){
    return <Layout title={'Contact'}>
        <div className="py-16">
            <h1 className="text-5xl py-4 font-sofiabold">Contact</h1>
            <section>
                <Paragraph>Hubungi saya lewat sosial media, atau kirim email ke- <Span><Link href={'mailto:muhsupriazis@gmail.com'} className="font-sofiamedium">muhsupriazis@gmail.com</Link></Span>.</Paragraph>
            </section>
            <section>
                <form>
                    <InputText placeholder={'Name'}/>
                    <InputText placeholder={'Email'}/>
                    <TextArea placeholder={'Message'}/>
                    <ButtonSubmit>Send Message</ButtonSubmit>
                </form>
            </section>
            <ButtonNavigasi url={'/'}>Kembali ke home</ButtonNavigasi>
        </div>
    </Layout>
}