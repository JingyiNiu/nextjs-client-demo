import { Tag } from './Tag';

export interface Article {
    id: number;
    slug: string;
    title: string;
    content: string;
    title_zh: string;
    content_zh: string;
    tags: Tag[];
    created_at: string;
    updated_at: string;
}
