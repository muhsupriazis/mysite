import ButtonNavigasi from "@/components/button/navigasi";
import Layout from "@/components/layout";
import Paragraph from "@/components/paragraph";
import Span from "@/components/span";
import Link from "next/link";

export default function Home() {
  return (
   <Layout title={'Home'}>
    <div className="h-screen md:h-auto py-16 flex justify-center flex-col">
      <div>
        <Paragraph>Halo, nama saya</Paragraph>
        <h1 className="font-sofiabold text-6xl">Muhammad Supri.</h1>
        <Paragraph>Saya memiliki pengalaman 2+ tahun di Web Development, Saya juga pernah menjadi asisten mentor pada program MSIB di <Span><Link className="font-sofiamedium" href={'https://www.ruangguru.com/'}>Ruang Guru</Link></Span>. Sekarang saya belajar Cloud Computing di program <Span><Link className="font-sofiamedium" href={'https://www.dicoding.com/programs/bangkit'}>Bangkit</Link></Span> oleh Google, Tokopeda, and Traveloka.</Paragraph>
        <Paragraph>Diwaktu luang saya bekerja sebagai Freelance Web Development, Saya juga kadang menulis artikel kalian bisa membacanya di bagian Blog dan kalian juga bisa melihat <Span><Link className="font-sofiamedium" href={'/portfolio'}>portofolio</Link></Span> yang telah saya buat, jika tertarik jangan sungkan untuk <Span><Link className="font-sofiamedium" href={'/contact'}>hubungi saya!</Link></Span></Paragraph>
      </div>
      <ButtonNavigasi url={'/about'}>Selengkapnya tentang saya</ButtonNavigasi>
    </div>
   </Layout>
  )
}