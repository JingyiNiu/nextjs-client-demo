import Head from "next/head";
import { useRouter } from "next/router";
import en from "../locales/en/text_en";
import zh from "../locales/zh/text_zh";
import Layout from "../components/layout";
// import Parallax from "../components/parallax/Parallax";
// import IndexPage from "./home";

const Home = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "zh" ? zh : en;

  return (
    <Layout>
      <PageHead />
      <div className="container mx-auto">
        <div className="font-bold text-lg mb-2">{t.selfIntro.title}</div>
        <div>
          {t.selfIntro.contents.map((t) => (
            <p key={t.id}>{t.text}</p>
          ))}
        </div>
        {/* <Parallax /> */}
        {/* <IndexPage /> */}
      </div>
    </Layout>
  );
};

export default Home;

function PageHead() {
  return (
    <Head>
      <title>N.JY</title>
      <meta name="description" content="A personal website created, maintain by Jingyi Niu" />
      <meta name="keywords" content="Niu Jingyi, Jingyi Niu, niujingyi, Personal website, Nextjs, Web App, Portfolio" />
      <meta name="author" content="Jingyi Niu" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
