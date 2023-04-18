import { Tag } from './Tag';

export interface Article {
    id: number;
    title: string;
    slug: string;
    content: string;
    tags: Tag[];
    created_at: string;
    updated_at: string;
}
