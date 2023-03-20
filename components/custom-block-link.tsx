import Link from 'next/link';
import React from 'react';

type LinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
};

const CustomBlockLink = ({ href, className, children }: LinkProps) => {
    return (
        <div className={`${className}`}>
            <Link
                href={href}
                className={`text-primary800 underline underline-offset-4 decoration-dotted hover:decoration-solid hover:decoration-2`}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomBlockLink;
