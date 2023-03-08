import React, { InputHTMLAttributes, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const CustomInput = ({ label, ...otherProps }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const labelClassName = `absolute left-4 ${
        isFocused ? 'top-3 bg-white px-1 left-2 text-sm' : 'top-7'
    } transition-all duration-300 transform ${isFocused ? '-translate-y-2' : ''}`;

    return (
        <div className="relative">
            <label className={labelClassName}>{label}</label>
            <input
                {...otherProps}
                className="px-3 py-2 border-2 my-4 w-full border-neutral-800 rounded-md"
                onFocus={() => setIsFocused(true)}
            />
        </div>
    );
};

export default CustomInput;
