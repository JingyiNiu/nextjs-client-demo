import Head from 'next/head';
import React from 'react';
import BackToHome from '../../components/back-to-home';
import CustomBlockLink from '../../components/custom-block-link';
import CustomTitle from '../../components/custom-title';
import Layout from '../../components/layout';

const AllPosts = () => {
    return (
        <Layout>
            <PageHead />
            <>
                <BackToHome />
                <AllPostList>
                    <CustomTitle>All Posts</CustomTitle>
                    <p>Here are all the hard coded posts just for demo😎</p>
                    <CustomBlockLink href="/posts/1">Post One</CustomBlockLink>
                    <CustomBlockLink href="/posts/2">Post Two</CustomBlockLink>
                    <CustomBlockLink href="/posts/3">
                        Adipisci neque harum modi maiores minus in sint facilis laudantium non!
                    </CustomBlockLink>
                    <CustomBlockLink href="/posts/4">
                        Consectetur adipisicing elit. Voluptas, ducimus?
                    </CustomBlockLink>
                    <CustomBlockLink href="/posts/5">
                        Ipsum odit atque, itaque veritatis voluptatem quos!
                    </CustomBlockLink>
                </AllPostList>
            </>
        </Layout>
    );
};

export default AllPosts;

function PageHead() {
    return (
        <Head>
            <title>All Posts - N.JY</title>
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

function AllPostList({ children }: { children: React.ReactNode }) {
    return <div className="m-8">{children}</div>;
}
