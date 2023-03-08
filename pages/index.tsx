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
import { Article } from '../interfaces/Article';
import { TransProps } from '../interfaces/HomeText';
import CustomInput from '../components/custom-input';
import CustomTextarea from '../components/custom-textarea';
import CustomButton from '../components/custom-button';

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

function SelfIntro({ t }: TransProps) {
    return (
        <article>
            <CustomTitle>{t.selfIntro.title}</CustomTitle>
            {parse(t.selfIntro.content)}
        </article>
    );
}

function RencentArticles({ t }: TransProps) {
    const recentArticles = articles_en.slice(0, 3) as Array<Article>;
    return (
        <div className="my-8">
            <CustomTitle>{t.recentArticles.title}</CustomTitle>
            <p>{t.recentArticles.content} </p>
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
            <p>{t.myProjects.content}</p>
        </div>
    );
}

function ContactMe({ t }: TransProps) {
    const handleFormSubmit = () => {
        console.log('submit');
    };
    return (
        <div className="my-8">
            <CustomTitle>{t.contactMe.title}</CustomTitle>
            <p>{t.contactMe.content}</p>
            <form>
                <CustomInput type="text" label={t.contactMe.form.name} />
                <CustomInput type="text" label={t.contactMe.form.email} />
                <CustomTextarea rows={4} label={t.contactMe.form.message} />
                <CustomButton onClick={handleFormSubmit} className="max-w-lg">
                    {t.contactMe.form.button}
                </CustomButton>
            </form>
        </div>
    );
}
