import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import parse from 'html-react-parser';
import CustomBlockLink from '../../components/custom-block-link';
import CustomTitle from '../../components/custom-title';
import Layout from '../../components/layout';
import { Article } from '../../interfaces/Article';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import NotFound from '../404';
import { API_BASE_URL, formatDate } from '../../utils/utils';

const ArticlePage = ({ data }: { data: Array<Article> }) => {
    const article = data[0];

    return (
        <Layout>
            {data.length ? (
                <>
                    <PageHead article={article} />
                    <>
                        <BackToAllArticles />
                        <Article article={article} />
                    </>
                </>
            ) : (
                <NotFound />
            )}
        </Layout>
    );
};

export default ArticlePage;

function PageHead({ article }: { article: Article }) {
    return (
        <Head>
            <title>{article.title} - N.JY</title>
            <meta name="description" content="A personal website created, maintain by Jingyi Niu" />
            <meta name="keywords" content="Jingyi Niu, niujingyi, Personal website, Nextjs, Web App, Portfolio" />
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
                <span className="text-lg text-primary-800 underline underline-offset-4 decoration-dotted hover:decoration-solid hover:font-medium hover:decoration-2">
                    {text}
                </span>
            </Link>
        </div>
    );
}

function Article({ article }: { article: Article }) {
    return (
        <div className={`bg-neutral-100 border-b-4 border-b-primary-500 p-4 md:pt-10 md:pb-16 md:px-20 my-8`}>
            <CustomTitle>{article.title}</CustomTitle>
            <h4 className='my-4 text-neutral-400 text-sm'>Published at { article.updated_at ? formatDate(article.updated_at) : formatDate(article.created_at)}</h4>
            <>{parse(article.content)}</>
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context;
    const slug = params?.slug;

    const res = await fetch(`${API_BASE_URL}/api/article/${slug}`);
    const { data } = await res.json();

    return { props: { data } };
}
