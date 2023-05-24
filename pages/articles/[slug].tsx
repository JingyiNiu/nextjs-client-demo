import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import CustomTitle from '../../components/custom/custom-title';
import Layout from '../../components/layout';
import { Article } from '../../interfaces/Article';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { API_BASE_URL, formatDate } from '../../utils/utils';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.min.css';

const ArticlePage = ({ data }: { data: Article }) => {
    const router = useRouter();
    const { locale } = router;
    const lang = locale === 'zh' ? 'zh' : '';

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <Layout>
            {data ? (
                <>
                    <PageHead article={data} />
                    <>
                        <BackToAllArticles lang={lang} />
                        <Article article={data} lang={lang} />
                    </>
                </>
            ) : (
                <div className="my-2 text-primary-800">Oops...There is something wrong, please try again later</div>
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

function BackToAllArticles({ lang }: { lang: string }) {
    return (
        <div className="p-4">
            <Link href="/articles">
                📚{' '}
                <span className="text-lg text-primary-800 underline underline-offset-4 decoration-dotted hover:decoration-solid hover:font-medium hover:decoration-2">
                    {lang ? '回到文章列表' : 'Back to All Articles'}
                </span>
            </Link>
        </div>
    );
}

function Article({ article, lang }: { article: Article; lang: string }) {
    return (
        <div className={`bg-neutral-100 border-b-4 border-b-primary-500 p-4 md:pt-10 md:pb-16 md:px-20 my-8`}>
            <CustomTitle>{lang ? (article.title_zh ? article.title_zh : article.title) : article.title}</CustomTitle>
            <h4 className="my-4 text-neutral-400 text-sm">
                {lang ? '发布于' : 'Published at'} {article.updated_at ? formatDate(article.updated_at) : formatDate(article.created_at)}
            </h4>
            <>{lang ? (article.content_zh ? parse(article.content_zh) : parse(article.content)) : parse(article.content)}</>
        </div>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const { params } = context;
        const slug = params?.slug;

        const res = await fetch(`${API_BASE_URL}/api/article/${slug}`);
        const data = await res.json();

        return { props: { data } };
    } catch (error) {
        return {
            props: { error: true },
        };
    }
}
