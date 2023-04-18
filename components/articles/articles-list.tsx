import React from 'react';
import CustomTitle from '../custom/custom-title';
import { Article } from '../../interfaces/Article';
import ArticleLink from './article-link';

interface Props {
    articles: Article[];
    t: {
        title: string;
        text: string;
    };
}

const ArticlesList = ({ articles, t }: Props) => {
    return (
        <>
            <CustomTitle>{t.title}</CustomTitle>
            <p>{t.text}</p>
            {articles && articles.length ? (
                articles.map((article: Article) => (
                    <ArticleLink key={article.id} href={`/articles/${article.slug}`} tags={article.tags} className="my-2">
                        {article.title}
                    </ArticleLink>
                ))
            ) : (
                <div className="my-2 text-primary-800">Oops...There is something wrong, please try again later</div>
            )}
        </>
    );
};

export default ArticlesList;
