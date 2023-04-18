import Link from 'next/link';
import React from 'react';
import { Tag } from '../../interfaces/Tag';
import CustomTag from '../custom/custom-tag';

type Props = {
    href: string;
    className?: string;
    tags: Tag[];
    children: React.ReactNode;
};

const ArticleLink = ({ href, className, tags, children }: Props) => {
    return (
        <div className="flex items-center">
            <Link href={href} className={`block text-primary-800 underline underline-offset-4 decoration-dotted hover:decoration-solid hover:decoration-2 ${className}`}>
                {children}
            </Link>
            <div className="flex ml-4">
                {tags.map((tag) => (
                    <CustomTag key={tag.id} className="py-1 text-xs">
                        {tag.name}
                    </CustomTag>
                ))}
            </div>
        </div>
    );
};

export default ArticleLink;
