import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/custom.module.scss';

interface Slide {
    imageUrl: string;
    title?: string;
    description?: string;
}

interface Props {
    slides: Slide[];
    width?: number;
    height?: number;
}

const CustomSlides = ({ slides, width, height }: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
    };

    const handleNextClick = () => {
        setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [slides.length]);

    return (
        <>
            <div style={{ width: width ? `${width}px` : '500px', height: height ? `${height}px` : '300px' }}>
                <div className={`flex items-center relative ${styles.slides}`}>
                    <button className="absolute z-10 w-10 h-full text-4xl text-white left-0" onClick={handlePrevClick}>
                        &#8249;
                    </button>
                    <div className={`relative ${styles.slide_container}`}>
                        {slides.map((slide, index) => (
                            <Slide key={index} slide={slide} isActive={index === activeIndex} />
                        ))}
                    </div>
                    <button className="absolute z-10 w-10 h-full text-4xl text-white right-0" onClick={handleNextClick}>
                        &#8250;
                    </button>
                </div>
                <div className={`flex justify-center my-2 mb-4 ${styles.indicators}`}>
                    {slides.map((slide, index) => (
                        <Indicator key={index} isActive={index === activeIndex} onClick={() => setActiveIndex(index)} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CustomSlides;

interface SlideProps {
    slide: Slide;
    isActive: boolean;
}

function Slide({ slide, isActive }: SlideProps) {
    const { imageUrl, title, description } = slide;
    return (
        <div className={`absolute top-0 left-0 opacity-0 ${styles.slide} ${isActive ? styles.active : ''}`}>
            <div className={`relative w-96 h-60 ${styles.slide_image_container}`}>
                <Image src={imageUrl} alt={title ? title : 'slide'} fill className="object-cover" />
                {title && (
                    <div className={`absolute bottom-0 w-full py-2 px-4 ${styles.slide_description}`}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

interface IndicatorProps {
    isActive: boolean;
    onClick: () => void;
}

function Indicator({ isActive, onClick }: IndicatorProps) {
    return <div className={`w-5 py-0.5 mr-1.5 cursor-pointer ${styles.indicator} ${isActive ? styles.active : ''}`} onClick={onClick}></div>;
}
