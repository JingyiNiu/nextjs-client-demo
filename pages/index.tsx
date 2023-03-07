import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import Layout from '../components/layout';
import CustomBlockLink from '../components/custom-block-link';
import CustomTitle from '../components/custom-title';
import en from '../locales/en/home_en';
import zh from '../locales/zh/home_zh';
import articles_en from '../data/articles';

const Home: NextPage = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'zh' ? zh : en;

    return (
        <Layout>
            <PageHead />
            <>
                <SelfIntro t={t} />
                <RencentArticles t={t} />
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

export interface Article {
    id: number;
    title: string;
    slug: string;
    content: string;
    tags: string[];
}

function RencentArticles({ t }: TransProps) {
    const recentArticles = articles_en.slice(0, 3) as Array<Article>;
    return (
        <div className="my-8">
            <CustomTitle>{t.recentArticles.title}</CustomTitle>
            {parse(t.recentArticles.content)}
            {recentArticles.map((article: Article) => (
                <CustomBlockLink
                    key={article.id}
                    href={`/articles/${article.slug}`}
                    className="my-2"
                >
                    {article.title}
                </CustomBlockLink>
            ))}
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
