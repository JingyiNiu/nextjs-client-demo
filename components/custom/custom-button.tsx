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
    const baseButtonStyles = 'px-3 py-1.5 block rounded-md disabled:opacity-40';
    const primaryButtonStyles = 'bg-primary-500 hover:bg-primary-800';
    const secondaryButtonStyles = 'bg-secondary-500 hover:bg-secondary-800';
    const cancelButtonStyles = 'bg-neutral-300 hover:bg-neutral-400';
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
