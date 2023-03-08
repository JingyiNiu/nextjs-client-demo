import { FormEvent } from 'react';

type CustomButtonProps = {
    onClick: (event: FormEvent) => void;
    children: React.ReactNode;
    disabled?: boolean;
    buttonStyles?: number;
    className?: string;
};

const CustomButton = ({
    onClick,
    children,
    disabled,
    buttonStyles,
    className,
    ...otherProps
}: CustomButtonProps) => {
    const baseButtonStyles =
        'p-4 block w-full rounded-md border-2 disabled:opacity-40';
    const primaryButtonStyles = 'border-primary text-primary hover:text-white hover:bg-primary';
    const secondaryButtonStyles =
        'border-secondary text-secondary hover:text-white hover:bg-secondary';
    const cancelButtonStyles =
        'border-neutral-400 text-neutral-400 hover:text-white hover:bg-neutral-400';
    const customButtonStyles = buttonStyles === 1 ? secondaryButtonStyles : cancelButtonStyles;
    return (
        <>
            <button
                onClick={onClick}
                className={`${baseButtonStyles} ${className} ${
                    buttonStyles ? customButtonStyles : primaryButtonStyles
                }`}
                disabled={disabled}
                {...otherProps}
            >
                {children}
            </button>
        </>
    );
};

export default CustomButton;
