import ButtonNavigasi from "@/components/button/navigasi";
import Layout from "@/components/layout";
import Paragraph from "@/components/paragraph";
import { site } from "@/config/site";

export default function Home() {
  return (
   <Layout title={'Home'}>
    <div className="min-h-screen flex justify-center flex-col">
      <div>
        <Paragraph>Hi, my name is</Paragraph>
        <h1 className="font-sofiabold text-5xl">Muhammad Supri.</h1>
        <Paragraph>Welcome to my personal website. On this website you can find out some things about me, to find out more you can read the posts that I have posted.</Paragraph>
        <Paragraph>I am a freelance web developer. You can see the projects I &apos; ve made, if you&apos;re interested, don&apos;t fell free to contact me.</Paragraph>
      </div>
      <ButtonNavigasi url={'/about'}>See More About Me</ButtonNavigasi>
    </div>
   </Layout>
  )
}