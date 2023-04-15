import Blog from "@/components/blog";
import ButtonNavigasi from "@/components/button/navigasi";
import Empty from "@/components/empty";
import Layout from "@/components/layout";
import Paragraph from "@/components/paragraph";

export default function Blogs(){
    const blogs =[]
    return <Layout title={'Blogs'}>
        <div className="py-16">
        <h1 className="text-5xl py-4 font-sofiabold">Blogs.</h1>
        {blogs.length > 0 ? <>
            <section>
                <Paragraph>My writings and thoughts mostly in Indonesian</Paragraph>
            </section>
            <section>
                <Blog title={'Hello World'} url={'#'} time={'12-9-2003'} summary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus fuga facere aperiam maxime a illo quos ullam? Atque nemo blanditiis eos adipisci harum odit.'}/>
                <Blog title={'Hello World'} url={'#'} time={'12-9-2003'} summary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus fuga facere aperiam maxime a illo quos ullam? Atque nemo blanditiis eos adipisci harum odit.'}/>
                <Blog title={'Hello World'} url={'#'} time={'12-9-2003'} summary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus fuga facere aperiam maxime a illo quos ullam? Atque nemo blanditiis eos adipisci harum odit.'}/>
                <Blog title={'Hello World'} url={'#'} time={'12-9-2003'} summary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus fuga facere aperiam maxime a illo quos ullam? Atque nemo blanditiis eos adipisci harum odit.'}/>
                <Blog title={'Hello World'} url={'#'} time={'12-9-2003'} summary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus fuga facere aperiam maxime a illo quos ullam? Atque nemo blanditiis eos adipisci harum odit.'}/>
            </section>
        </> : <Empty>There are no published blogs</Empty>
        }
        <ButtonNavigasi url={'/portfolio'}>Lets Continue To Projects</ButtonNavigasi>
        </div>
    </Layout>
}