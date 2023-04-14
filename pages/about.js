import ButtonNavigasi from "@/components/button/navigasi";
import H2 from "@/components/heading/heading2";
import Layout from "@/components/layout";
import Paragraph from "@/components/paragraph";
import Project from "@/components/project";

export default function About(){
    return <Layout title={'About'}>
        <div className="py-16">
        <h1 className="text-5xl py-4 font-sofiabold">About Me.</h1>
        <section>
            <Paragraph>I graduated from university majoring in infromatics engineering in 2024. I have had many labels throught my career in the digital industry but i am happy to say that i turn complex concet into legent digital procut. I enjoy collaborationg with stakeholder in busnis, tech and science to create meanfull digital product.</Paragraph>
        </section>
        <section>
            <H2>What can I develop?</H2>
            <div>
                <Project image={'/staticwebsite.png'} title={'Static Aplication'} tags={['Landing Page', 'Personal Blog']} description={'Advantages of Dynamic Websites. Making the shift benefits for both your business and your target audience: 1. More personalized browsing.'}/>
                <Project image={'/dinamic.jpg'} title={'Dinamic Aplication'} tags={['E-Commers', 'LSM']} description={'Advantages of Dynamic Websites. Making the shift benefits for both your business and your target audience: 1. More personalized browsing.'}/>
            </div>
        </section>
        <ButtonNavigasi url={'/blogs'}>If you wont more</ButtonNavigasi>
        </div>
    </Layout>
}