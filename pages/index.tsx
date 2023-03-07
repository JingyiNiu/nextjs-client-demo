import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import CustomBlockLink from '../components/custom-block-link';
import SelfIntro from '../components/self-intro';
import CustomTitle from '../components/custom-title';

const Home: NextPage = () => {
    return (
        <Layout>
            <PageHead />
            <>
                <SelfIntro />
                <RencentPosts />
                <MyWorks />
                <ContactMe />
            </>
        </Layout>
    );
};

export default Home;

function PageHead() {
    return (
        <Head>
            <title>N.JY</title>
            <meta name="description" content="A personal website created, maintain by Jingyi Niu" />
            <meta
                name="keywords"
                content="Jingyi Niu, niujingyi, Personal website, Nextjs, Web App, Portfolio"
            />
            <meta name="author" content="Jingyi Niu" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

function RencentPosts() {
    return (
        <div className="my-8">
            <CustomTitle>Recent Posts</CustomTitle>
            <p>Here are some of dummy hard coded posts just for demo😎</p>
            <CustomBlockLink href="/posts/1">Post One</CustomBlockLink>
            <CustomBlockLink href="/posts/2">Post Two</CustomBlockLink>
        </div>
    );
}

function MyWorks() {
    return (
        <div className="my-8">
            <CustomTitle>My Works</CustomTitle>
        </div>
    );
}

function ContactMe() {
    return (
        <div className="my-8">
            <CustomTitle>Contact Me</CustomTitle>
        </div>
    );
}
