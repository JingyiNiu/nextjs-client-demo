import React, { TextareaHTMLAttributes, useState } from 'react';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}
const CustomTextarea = ({ label, ...otherProps }: InputProps) => {
    const [isLabelTransformed, setIsLabelTransformed] = useState(false);

    const basicLabel = `absolute transition-all duration-200 ease-in-out pointer-events-none`;
    const focusLabel = isLabelTransformed ? 'top-0.5 bg-white rounded-md px-1 left-2 transform' : 'top-7 left-4 text-neutral-400';

    return (
        <div className="relative">
            <label className={`${basicLabel} ${focusLabel}`}>{label}</label>
            <textarea
                {...otherProps}
                className="px-3 py-2 border-2 my-4 w-full max-w-lg border-neutral-800 rounded-md"
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

export default CustomTextarea;
