import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import CustomLink from '../components/link';
import SelfIntro from '../components/self-intro';

const Home: NextPage = () => {
    return (
        <Layout>
            <PageHead />
            <>
                <SelfIntro />
                <PostList>
                    <p>Here all some of dummy hard coded posts just for demo😎</p>
                    <div>
                        <CustomLink href="/posts/1">Post One</CustomLink>
                    </div>
                    <div>
                        <CustomLink href="/posts/2">Post Two</CustomLink>
                    </div>
                </PostList>
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

function PostList({ children }: { children: React.ReactNode }) {
    return <div className="flex flex-col my-8">{children}</div>;
}
