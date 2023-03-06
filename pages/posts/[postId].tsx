import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout';
import CustomLink from '../../components/link';
import PostCard from '../../components/post-card';

const PostPage = () => {
    return (
        <Layout>
            <PageHead />
            <>
                <CustomLink href="/">🏠 Back</CustomLink>
                <PostCard />
            </>
        </Layout>
    );
};

export default PostPage;

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
