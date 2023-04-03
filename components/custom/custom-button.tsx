import { ButtonHTMLAttributes, FormEvent } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    buttonStyles?: number;
    className?: string;
}

const CustomButton = ({
    children,
    buttonStyles,
    className,
    ...otherProps
}: CustomButtonProps) => {
    const baseButtonStyles = 'px-4 py-1 block w-full rounded-md border-2 disabled:opacity-40';
    const primaryButtonStyles = 'border-primary-800 text-primary-800 hover:text-white hover:bg-primary-800';
    const secondaryButtonStyles =
        'border-secondary-500 text-secondary-500 hover:text-white hover:bg-secondary-500';
    const cancelButtonStyles =
        'border-neutral-400 text-neutral-400 hover:text-white hover:bg-neutral-400';
    const customButtonStyles = buttonStyles === 1 ? secondaryButtonStyles : cancelButtonStyles;
    return (
        <>
            <button
                className={`${baseButtonStyles} ${className} ${
                    buttonStyles ? customButtonStyles : primaryButtonStyles
                }`}
                {...otherProps}
            >
                {children}
            </button>
        </>
    );
};

export default CustomButton;
