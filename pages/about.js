import ButtonNavigasi from "@/components/button/navigasi";
import H2 from "@/components/heading/heading2";
import Layout from "@/components/layout";
import Paragraph from "@/components/paragraph";

export default function About(){
    return <Layout title={'About'}>
        <div className="py-16">
        <h1 className="text-5xl py-4 font-sofiabold">About Me.</h1>
        <section>
            <Paragraph>I graduated from university majoring in infromatics engineering in 2024. I have had many labels throught my career in the digital industry but i am happy to say that i turn complex concet into legent digital procut. I enjoy collaborationg with stakeholder in busnis, tech and science to create meanfull digital product.</Paragraph>
        </section>
        <section>
            <H2>What i have to do?</H2>
        </section>
        <ButtonNavigasi url={'/blogs'}>If you wont more</ButtonNavigasi>
        </div>
    </Layout>
}