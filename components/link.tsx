import Link from 'next/link';
import React from 'react';

type LinkProps = {
    href: string;
    children: React.ReactNode;
};

const CustomLink = ({ href, children }: LinkProps) => {
    return (
        <Link href={href} className="text-primary800 underline underline-offset-4 decoration-dotted hover:decoration-solid hover:font-medium hover:decoration-2">
            {children}
        </Link>
    );
};

export default CustomLink;
