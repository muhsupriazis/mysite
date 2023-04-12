import ButtonNavigasi from "@/components/button/navigasi";
import Layout from "@/components/layout";
import Paragraph from "@/components/paragraph";
import Span from "@/components/span";
import { site } from "@/config/site";
import Link from "next/link";

export default function Home() {
  return (
   <Layout title={'Home'}>
    <div className="min-h-screen flex justify-center flex-col">
      <div>
        <Paragraph>Hi, my name is</Paragraph>
        <h1 className="font-sofiabold text-6xl">Muhammad Supri.</h1>
        <Paragraph>Welcome to my personal website. On this website you can find out some things <Span><Link href={'/about'}>about me</Link></Span>, to find out more you can read the <Span><Link href={'/blogs'}>posts</Link></Span> that I have posted.</Paragraph>
        <Paragraph>I am a freelance web developer. You can see the <Span><Link href={'/portfolio'}>projects</Link></Span> I &apos; ve made, if you&apos;re interested, don&apos;t fell free to <Span><Link href={'/contact'}>contact me</Link></Span>.</Paragraph>
      </div>
      <ButtonNavigasi url={'/about'}>See More About Me</ButtonNavigasi>
    </div>
   </Layout>
  )
}