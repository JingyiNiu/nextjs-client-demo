import { Tag } from './Tag';

export interface Article {
    id: number;
    title: string;
    slug: string;
    content: string;
    tags: Tag[];
}
