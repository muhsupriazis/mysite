import ButtonNavigasi from "@/components/button/navigasi";
import Layout from "@/components/layout";
import Paragraph from "@/components/paragraph";
import Project from "@/components/project";

export default function Portfolio(){
    return <Layout title={'Portfolio'}>
        <div className="py-16">
            <h1 className="text-5xl py-4 font-sofiabold">Portfolio</h1>
            <section>
                <Paragraph>Some of the projects I have completed</Paragraph>
            </section>
            <section>
            <div className="md:grid grid-cols-2 md:gap-6 lg:gap-8">
                <Project image={'/dinamic.jpg'} title={'Play Modules'} tags={['Javascript', 'NExtJS', 'MongoDB']} description={'Advantages of Dynamic Websites. Making the shift benefits for both your business and your target audience: 1. More personalized browsing.'}/>
                <Project image={'/dinamic.jpg'} title={'Play Modules'} tags={['Javascript', 'NExtJS', 'MongoDB']} description={'Advantages of Dynamic Websites. Making the shift benefits for both your business and your target audience: 1. More personalized browsing.'}/>
            </div>
            </section>
            <ButtonNavigasi url={'/contact'}>Are you convinced to contact me now ?</ButtonNavigasi>
        </div>
    </Layout>
}