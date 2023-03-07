import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CustomBlockLink from '../../components/custom-block-link';
import Layout from '../../components/layout';
import PostCard from '../../components/post-card';

const PostPage = () => {
    return (
        <Layout>
            <PageHead />
            <>
                <BackToAllPosts />
                <PostCard />
                <PrevAndNextPosts />
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

function BackToAllPosts() {
    return (
        <div className="p-4">
            <Link href="/posts">
                📚{' '}
                <span className="text-lg text-primary800 underline underline-offset-4 decoration-dotted hover:decoration-solid hover:font-medium hover:decoration-2">
                    Back to All Posts
                </span>
            </Link>
        </div>
    );
}

function PrevAndNextPosts() {
    return (
        <div className="flex justify-between mb-8">
            <CustomBlockLink href="/posts/1">Previous Post</CustomBlockLink>
            <CustomBlockLink href="/posts/2">Next Post</CustomBlockLink>
        </div>
    );
}
