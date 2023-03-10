import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import BackToHome from '../../components/back-to-home';
import CustomBlockLink from '../../components/custom-block-link';
import CustomTitle from '../../components/custom-title';
import Layout from '../../components/layout';
import articles_en from '../../data/articles';
import { Article } from '../../interfaces/Article';
import en from '../../locales/en/all_articles_en';
import zh from '../../locales/zh/all_articles_zh';

const AllArticles = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'zh' ? zh : en;
    
    const allArticles = articles_en as Array<Article>;

    return (
        <Layout>
            <PageHead />
            <>
                <BackToHome />
                <ArticlesList>
                    <CustomTitle>{t.title}</CustomTitle>
                    <p>{t.text}</p>
                    {allArticles.map((article: Article) => (
                        <CustomBlockLink
                            key={article.id}
                            href={`/articles/${article.slug}`}
                            className="my-2"
                        >
                            {article.title}
                        </CustomBlockLink>
                    ))}
                </ArticlesList>
            </>
        </Layout>
    );
};

export default AllArticles;

function PageHead() {
    return (
        <Head>
            <title>All Articles - N.JY</title>
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

function ArticlesList({ children }: { children: React.ReactNode }) {
    return <div className="m-8">{children}</div>;
}
