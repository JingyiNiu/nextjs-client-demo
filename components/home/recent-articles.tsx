import React from 'react';
import Link from 'next/link';
import { Article } from '../../interfaces/Article';
import CustomTitle from '../custom/custom-title';
import CustomBlockLink from '../custom/custom-block-link';
import { TransProps } from '../../interfaces/HomeText';

interface Props {
    t: TransProps;
    recent_articles: [];
    lang: string;
}

const RecentArticles = ({ t, recent_articles, lang }: Props) => {
    return (
        <div className="my-8">
            <CustomTitle>{t.recentArticles.title}</CustomTitle>

            {recent_articles ? (
                recent_articles.map((article: Article) => (
                    <CustomBlockLink key={article.id} href={`/articles/${article.slug}`} className="my-2">
                        {lang ? (article.title_zh ? article.title_zh : article.title) : article.title}
                    </CustomBlockLink>
                ))
            ) : (
                <div className="my-2 text-primary-800">There is something wrong, no article found</div>
            )}

            <Link href={`/articles`} className="my-2">
                <button className="block rounded px-3 py-1 bg-primary-500 hover:bg-primary-800">{t.recentArticles.button}</button>
            </Link>
        </div>
    );
};

export default RecentArticles;
