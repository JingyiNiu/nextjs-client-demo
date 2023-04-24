import React from 'react';

type Props = {
    className?: string;
    onClick: () => void;
    children: React.ReactNode;
};

const CustomTag = ({ children, onClick, className }: Props) => {
    return (
        <div className={`text-sm px-2 py-1 border mr-2 rounded-md ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default CustomTag;
