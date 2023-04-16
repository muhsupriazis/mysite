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
        <Paragraph>I have more than two years experience in website development, I was also an assistant frontend developer mentor in the <Span><Link className="font-sofiamedium" href={'https://www.ruangguru.com/'}>Ruang Guru</Link></Span>. I&apos;m currently studying at the <Span><Link className="font-sofiamedium" href={'https://www.dicoding.com/programs/bangkit'}>Bangkit</Link></Span> by Google, Tokopeda, and Traveloka programs.</Paragraph>
        <Paragraph>In my spare time, working as a freelancer, I write a blog and also work on projects. You can see some of my <Span><Link className="font-sofiamedium" href={'/portfolio'}>portfolios</Link></Span>, and if interested in working together please <Span><Link className="font-sofiamedium" href={'/contact'}>contact me!</Link></Span></Paragraph>
      </div>
      <ButtonNavigasi url={'/about'}>See More About Me</ButtonNavigasi>
    </div>
   </Layout>
  )
}