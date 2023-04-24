import React from 'react';
import { Tag } from '../../interfaces/Tag';
import CustomTag from '../custom/custom-tag';

interface Props {
    tags: Tag[];
    selectedTag: Tag | null;
    setSelectedTag: (tag: Tag | null) => void;
}

const TagsList = ({ tags, selectedTag, setSelectedTag }: Props) => {
    const active = 'text-white bg-primary-500 border-0';
    return (
        <>
            {tags && tags.length && (
                <div className="flex mb-8">
                    <CustomTag className={`cursor-pointer ${selectedTag ? '' : active}`} onClick={() => setSelectedTag(null)}>
                        All
                    </CustomTag>
                    {tags.map((tag) => (
                        <CustomTag key={tag.id} className={`cursor-pointer ${selectedTag && selectedTag.id === tag.id ? active : ''}`} onClick={() => setSelectedTag(tag)}>
                            {tag.name}
                        </CustomTag>
                    ))}
                </div>
            )}
        </>
    );
};

export default TagsList;
