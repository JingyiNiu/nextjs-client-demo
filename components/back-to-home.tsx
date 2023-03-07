import Link from 'next/link';
import React from 'react';

const BackToHome = () => {
    return (
        <div className='p-4'>
            <Link href="/">
                🏠{' '}
                <span className="text-lg text-primary800 underline underline-offset-4 decoration-dotted hover:decoration-solid hover:font-medium hover:decoration-2">
                    Back to Home
                </span>
            </Link>
        </div>
    );
};

export default BackToHome;
