import ButtonNavigasi from "@/components/button/navigasi";
import Layout from "@/components/layout";
import Paragraph from "@/components/paragraph";

export default function About(){
    return <Layout title={'About'}>
        <div className="py-16">
        <h1 className="text-5xl py-4 font-sofiabold">About Me.</h1>
        <section>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus fuga facere aperiam maxime a illo quos ullam? Atque nemo blanditiis eos adipisci odit voluptatem id, voluptatibus corporis corrupti accusantium. Dolores, quas. Quod, vitae in nobis quos doloribus perferendis nulla id, veritatis dicta nam vel! Corporis nihil doloremque harum odit.</Paragraph>
        </section>
        <ButtonNavigasi url={'/blogs'}>If you wont more</ButtonNavigasi>
        </div>
    </Layout>
}