import Head from 'next/head';
import { useRouter } from 'next/router';
import { API_BASE_URL } from '../utils/utils';
import en from '../locales/en/home_en';
import zh from '../locales/zh/home_zh';
import Layout from '../components/layout';
import SelfIntro from '../components/home/self-intro';
import RecentArticles from '../components/home/recent-articles';
import ContactMe from '../components/home/contact-me';
import MyProjects from '../components/home/my-projects';

const Home = ({ home_intro, recent_articles, projects }: any) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'zh' ? zh : en;
    const lang = locale === 'zh' ? 'zh' : '';

    let locale_home_intro = home_intro && (locale === 'zh' ? home_intro[1] : home_intro[0]);

    return (
        <Layout>
            <PageHead />
            <>
                <SelfIntro locale_home_intro={locale_home_intro} />
                <RecentArticles t={t} recent_articles={recent_articles} lang={lang}/>
                <MyProjects t={t} projects={projects} />
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
                content="Niu Jingyi, Jingyi Niu, niujingyi, Personal website, Nextjs, Web App, Portfolio"
            />
            <meta name="author" content="Jingyi Niu" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export async function getServerSideProps() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/home`);
        const { home_intro, recent_articles } = await res.json();
        const projects: any[] = [];

        return {
            props: {
                home_intro,
                recent_articles,
                projects,
            },
        };
    } catch (error) {
        return {
            props: { error: true },
        };
    }
}
