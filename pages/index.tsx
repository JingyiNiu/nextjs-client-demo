import { useState } from 'react';
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
import useMutation from '../hooks/useMutation';

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
    const [formFilled, setFormFilled] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const {
        mutate: submitContactForm,
        isLoading,
        error: contactError,
        success: isSuccess,
    } = useMutation({ url: API_END_POINT });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isFormValid = Object.values(formData).every((value) => value !== '');
        isFormValid && setFormFilled(true);
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
                {isSuccess && (
                    <div className="absolute-center bg-green-100 text-green-500 rounded-lg font-bold p-4 max-w-lg">
                        {t.contactMe.form.successMessage}
                    </div>
                )}
            </form>
        </div>
    );
}
