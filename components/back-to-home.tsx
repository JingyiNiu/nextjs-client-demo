import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const BackToHome = () => {
    const router = useRouter();
    const { locale } = router;
    const text = locale === 'zh' ? '回到主页' : 'Back to Home';

    return (
        <div className="p-4">
            <Link href="/">
                🏠{' '}
                <span className="text-lg text-primary-800 underline underline-offset-4 decoration-dotted hover:decoration-solid hover:font-medium hover:decoration-2">
                    {text}
                </span>
            </Link>
        </div>
    );
};

export default BackToHome;
