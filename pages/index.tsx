import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import Layout from '../components/layout';
import CustomBlockLink from '../components/custom-block-link';
import CustomTitle from '../components/custom-title';
import en from '../locales/en/intro.json';
import zh from '../locales/zh/intro.json';

const Home: NextPage = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'zh' ? zh : en;

    return (
        <Layout>
            <PageHead />
            <>
                <SelfIntro t={t} />
                <RencentPosts t={t} />
                <MyWorks t={t} />
                <ContactMe t={t} />
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

interface Content {
    title: string | null;
    content: string;
}

interface TransProps {
    t: {
        selfIntro: Content;
        recentArticles: Content;
        myProjects: Content;
        contactMe: Content;
    };
}

function SelfIntro({ t }: TransProps) {
    return (
        <article>
            <CustomTitle>{t.selfIntro.title}</CustomTitle>
            {parse(t.selfIntro.content)}
        </article>
    );
}

function RencentPosts({ t }: TransProps) {
    return (
        <div className="my-8">
            <CustomTitle>{t.recentArticles.title}</CustomTitle>
            {parse(t.recentArticles.content)}
            <CustomBlockLink href="/posts/1">Post One</CustomBlockLink>
            <CustomBlockLink href="/posts/2">Post Two</CustomBlockLink>
        </div>
    );
}

function MyWorks({ t }: TransProps) {
    return (
        <div className="my-8">
            <CustomTitle>{t.myProjects.title}</CustomTitle>
            {parse(t.myProjects.content)}
        </div>
    );
}

function ContactMe({ t }: TransProps) {
    return (
        <div className="my-8">
            <CustomTitle>{t.contactMe.title}</CustomTitle>
            {parse(t.contactMe.content)}
        </div>
    );
}
