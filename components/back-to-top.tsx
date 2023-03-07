import React, { useEffect, useState } from 'react';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    function handleClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleScroll() {
        setShowButton(window.pageYOffset > 200);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showButton && (
                <button
                    className={`hidden bottom-4 right-4 bg-primary px-3 py-4 text-white font-medium hover:bg-primary800 md:block md:fixed`}
                    onClick={handleClick}
                >
                    <div className="w-0 h-0 border-b-8 border-b-white border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
                </button>
            )}
        </>
    );
};

export default BackToTop;
