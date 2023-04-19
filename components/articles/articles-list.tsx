import React from 'react';
import CustomTitle from '../custom/custom-title';
import { Article } from '../../interfaces/Article';
import ArticleLink from './article-link';

interface Props {
    articles: Article[];
    lang: string;
}

const ArticlesList = ({ articles, lang }: Props) => {
    return (
        <>
            <CustomTitle>{lang ? '文章列表' : 'All Articles'}</CustomTitle>
            {articles && articles.length ? (
                articles.map((article: Article) => (
                    <ArticleLink key={article.id} href={`/articles/${article.slug}`} tags={article.tags} className="my-2">
                        {lang ? (article.title_zh ? article.title_zh : article.title) : article.title}
                    </ArticleLink>
                ))
            ) : (
                <div className="my-2 text-primary-800">Oops...There is something wrong, please try again later</div>
            )}
        </>
    );
};

export default ArticlesList;
