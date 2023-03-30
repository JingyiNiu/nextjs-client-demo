import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import Layout from '../components/layout';
import CustomBlockLink from '../components/custom-block-link';
import CustomTitle from '../components/custom-title';
import en from '../locales/en/home_en';
import zh from '../locales/zh/home_zh';
import { Article } from '../interfaces/Article';
import { TransProps } from '../interfaces/HomeText';
import CustomInput from '../components/custom-input';
import CustomTextarea from '../components/custom-textarea';
import CustomButton from '../components/custom-button';
import useMutation from '../hooks/useMutation';
import { API_BASE_URL } from '../utils/utils';

const Home = ({ home_intro, recent_articles }: any) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'zh' ? zh : en;
    let locale_home_intro;
    if (home_intro && home_intro.length) {
        locale_home_intro = locale === 'zh' ? home_intro[1] : home_intro[0];
    }

    return (
        <Layout>
            <PageHead />
            <>
                <SelfIntro locale_home_intro={locale_home_intro} />
                <RencentArticles t={t} recent_articles={recent_articles} />
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
                content="Niu Jingyi, Jingyi Niu, niujingyi, Personal website, Nextjs, Web App, Portfolio"
            />
            <meta name="author" content="Jingyi Niu" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

function SelfIntro({ locale_home_intro }: any) {
    return (
        <article>
            <CustomTitle>{locale_home_intro && locale_home_intro.title}</CustomTitle>
            {parse(locale_home_intro ? locale_home_intro.content : '')}
        </article>
    );
}

function RencentArticles({ t, recent_articles }: any) {
    return (
        <div className="my-8">
            <CustomTitle>{t.recentArticles.title}</CustomTitle>
            <p>{t.recentArticles.content} </p>
            {recent_articles ? (
                recent_articles.map((article: Article) => (
                    <CustomBlockLink key={article.id} href={`/articles/${article.slug}`} className="my-2">
                        {article.title}
                    </CustomBlockLink>
                ))
            ) : (
                <>Oops...No data found</>
            )}
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

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

function ContactMe({ t }: TransProps) {
    const API_END_POINT = '/api/contact';
    const initialFormData = {
        name: '',
        email: '',
        message: '',
    };
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const {
        mutate: submitContactForm,
        isLoading,
        error: contactError,
        success: isSuccess,
    } = useMutation({ url: API_END_POINT });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await submitContactForm(formData);
        isSuccess && successMessage();
        isSuccess && setFormData(initialFormData);
    };

    const successMessage = () => {
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 2000);
    };
    return (
        <div className="my-8">
            <CustomTitle>{t.contactMe.title}</CustomTitle>
            <p>{t.contactMe.content}</p>
            <form onSubmit={handleFormSubmit} className="max-w-lg relative">
                <CustomInput
                    type="text"
                    label={t.contactMe.form.name}
                    name="name"
                    onChange={handleInputChange}
                    value={formData.name}
                    required
                />
                <CustomInput
                    type="text"
                    label={t.contactMe.form.email}
                    name="email"
                    onChange={handleInputChange}
                    value={formData.email}
                    required
                />
                <CustomTextarea
                    rows={4}
                    label={t.contactMe.form.message}
                    name="message"
                    onChange={handleInputChange}
                    value={formData.message}
                    required
                />
                <CustomButton type="submit" disabled={isLoading}>
                    {t.contactMe.form.button}
                </CustomButton>
                {contactError && (
                    <div className={`my-4 text-rose-500 rounded-md p-4 w-full max-w-lg bg-rose-50`}>
                        <p>{contactError}</p>
                    </div>
                )}
                {showSuccessMessage && (
                    <div className="absolute-center bg-green-100 text-green-500 rounded-lg font-bold p-4 max-w-lg">
                        {t.contactMe.form.successMessage}
                    </div>
                )}
            </form>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/home`);
        const { home_intro, recent_articles } = await res.json();

        return {
            props: {
                home_intro,
                recent_articles,
            },
        };
    } catch (error) {
        return {
            props: { error: true },
        };
    }
}
