import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import BackToHome from '../../components/back-to-home';
import Layout from '../../components/layout';
import ArticlesList from '../../components/articles/articles-list';
import TagsList from '../../components/articles/tags-list';
import { Article } from '../../interfaces/Article';
import { Tag } from '../../interfaces/Tag';
import { API_BASE_URL } from '../../utils/utils';

interface Props {
    articles: Article[];
    tags: Tag[];
}
const AllArticles = ({ articles, tags }: Props) => {
    const router = useRouter();
    const { locale } = router;
    const lang = locale === 'zh' ? 'zh' : '';

    const [selectedTag, setSelectedTag] = useState<Tag | null>(null);

    const filteredArticles = selectedTag ? articles.filter((article) => article.tags.some((tag) => tag.id === selectedTag.id)) : articles;

    return (
        <Layout>
            <PageHead />
            <BackToHome />
            <div className="m-8">
                <TagsList tags={tags} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
                <ArticlesList articles={filteredArticles} lang={lang} />
            </div>
        </Layout>
    );
};

export default AllArticles;

function PageHead() {
    return (
        <Head>
            <title>All Articles - N.JY</title>
            <meta name="description" content="A personal website created, maintain by Jingyi Niu" />
            <meta name="keywords" content="Jingyi Niu, niujingyi, Personal website, Nextjs, Web App, Portfolio" />
            <meta name="author" content="Jingyi Niu" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export async function getServerSideProps() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/article`);
        const data = await res.json();

        return {
            props: {
                articles: data.articles,
                tags: data.tags,
            },
        };
    } catch (error) {
        return {
            props: { error: true },
        };
    }
}
