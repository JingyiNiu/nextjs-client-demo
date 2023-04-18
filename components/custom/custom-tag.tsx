import React from 'react';

type Props = {
    className?: string;
    children: React.ReactNode;
};

const CustomTag = ({ children, className }: Props) => {
    return <div className={`text-sm px-2 py-1 border mr-2 rounded-md cursor-pointer ${className}`}>{children}</div>;
};

export default CustomTag;
