import React from 'react';

type Props = {
    children: React.ReactNode;
};

const CustomTitle = ({ children }: Props) => {
    return <h2 className="font-bold text-2xl my-4">{children}</h2>;
};

export default CustomTitle;
