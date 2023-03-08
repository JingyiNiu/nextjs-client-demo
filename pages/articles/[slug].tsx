import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import parse from 'html-react-parser';
import CustomBlockLink from '../../components/custom-block-link';
import CustomTitle from '../../components/custom-title';
import Layout from '../../components/layout';
import articles_en from '../../data/articles';
import { Article } from '../../interfaces/Article';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { params } = context;
    const slug = params?.slug;

    return { props: { slug } };
};

const ArticlePage = ({ slug }: { slug: string }) => {
    const allArticles = articles_en as Array<Article>;
    const article = allArticles.filter((article: Article) => article.slug === slug)[0];

    return (
        <Layout>
            <PageHead article={article} />
            <>
                <BackToAllArticles />
                <Article article={article} />
                <PrevAndNextArticles />
            </>
        </Layout>
    );
};

export default ArticlePage;

function PageHead({ article }: { article: Article }) {
    return (
        <Head>
            <title>{article.title} - N.JY</title>
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

function BackToAllArticles() {
    const router = useRouter();
    const { locale } = router;
    const text = locale === 'zh' ? '回到文章列表' : 'Back to All Articles';

    return (
        <div className="p-4">
            <Link href="/articles">
                📚{' '}
                <span className="text-lg text-primary800 underline underline-offset-4 decoration-dotted hover:decoration-solid hover:font-medium hover:decoration-2">
                    {text}
                </span>
            </Link>
        </div>
    );
}

function Article({ article }: { article: Article }) {
    const articleTitle = article ? article.title : '';
    const articleContent = article ? article.content : '';
    return (
        <div
            className={`bg-neutral-100 border-b-4 border-b-primary p-4 md:pt-10 md:pb-16 md:px-20 my-8`}
        >
            <CustomTitle>{articleTitle}</CustomTitle>
            <>{parse(articleContent)}</>
        </div>
    );
}

function PrevAndNextArticles() {
    const router = useRouter();
    const { locale } = router;
    const prev = locale === 'zh' ? '前一篇文章' : 'Previous Article';
    const next = locale === 'zh' ? '后一篇文章' : 'Next Article';

    return (
        <div className="flex justify-between mb-8">
            <CustomBlockLink href="/articles/1">{prev}</CustomBlockLink>
            <CustomBlockLink href="/articles/2">{next}</CustomBlockLink>
        </div>
    );
}
