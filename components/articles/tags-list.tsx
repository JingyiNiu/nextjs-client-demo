import React from 'react';
import { Tag } from '../../interfaces/Tag';
import CustomTag from '../custom/custom-tag';

interface Props {
    tags: Tag[];
}

const TagsList = ({ tags }: Props) => {
    return (
        <>
            {tags && tags.length && (
                <div className="flex mb-8">
                    {tags.map((tag) => (
                        <CustomTag key={tag.id}>{tag.name}</CustomTag>
                    ))}
                </div>
            )}
        </>
    );
};

export default TagsList;
