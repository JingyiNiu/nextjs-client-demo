import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';

const Home: NextPage = () => {
    return (
        <Layout>
            <PageHead />
            <>
                <h1 className={`my-4 text-xl`}>Hi there</h1>
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
