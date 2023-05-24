import React, { InputHTMLAttributes, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const CustomInput = ({ label, ...otherProps }: InputProps) => {
    const [isLabelTransformed, setIsLabelTransformed] = useState(false);

    const basicLabel = `absolute transition-all duration-200 ease-in-out pointer-events-none`;
    const focusLabel = isLabelTransformed ? 'top-0.5 bg-white rounded-md px-1 left-2 transform' : 'top-7 left-4 text-neutral-400';

    const basicInput = `px-3 py-2 border-2 my-4 w-full rounded-md border-neutral-800`;

    return (
        <div className="relative">
            <label className={`${basicLabel} ${focusLabel}`}>{label}</label>
            <input
                {...otherProps}
                className={`${basicInput}`}
                onInput={() => setIsLabelTransformed(true)}
                onBlur={(e) => {
                    if (!e.target.value) {
                        setIsLabelTransformed(false);
                    }
                }}
            />
        </div>
    );
};

export default CustomInput;
