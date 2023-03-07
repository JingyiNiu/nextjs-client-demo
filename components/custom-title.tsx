import React from 'react';

const CustomTitle = ({ children }: { children: React.ReactNode }) => {
    return <h2 className="font-bold text-2xl my-4">{children}</h2>;
};

export default CustomTitle;
