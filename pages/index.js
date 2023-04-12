import ButtonNavigasi from "@/components/button/navigasi";
import Layout from "@/components/layout";
import { site } from "@/config/site";

export default function Home() {
  return (
   <Layout title={'Home'}>
    <main>
      <section className="p-5">
        <p>Hi,</p>
        <h1 className="font-calibre text-4xl py-2">I am {site.name} and I am a Web Developer.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus fuga facere aperiam maxime a illo quos ullam? Atque nemo blanditiis eos adipisci odit voluptatem id, voluptatibus corporis corrupti accusantium. Dolores, quas.</p>
        <ButtonNavigasi url={'/contact'}>Contact Me</ButtonNavigasi>
      </section>
    </main>
   </Layout>
  )
}