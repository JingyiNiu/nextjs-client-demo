import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CustomButton from '../../components/custom/custom-button';

const NotFound = () => {
    return (
        <>
            <PageHead />
            <div className="text-center mt-24">
                <svg
                    className="mx-auto mb-4"
                    width="230"
                    height="97"
                    viewBox="0 0 230 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.454545 75.9091V66.6364L41.3636 1.90909H48.0909V16.2727H43.5455L12.6364 65.1818V65.9091H67.7273V75.9091H0.454545ZM44.2727 95V73.0909V68.7727V1.90909H55V95H44.2727ZM115.125 96.2727C108.277 96.2727 102.443 94.4091 97.625 90.6818C92.8068 86.9242 89.125 81.4848 86.5795 74.3636C84.0341 67.2121 82.7614 58.5758 82.7614 48.4545C82.7614 38.3939 84.0341 29.803 86.5795 22.6818C89.1553 15.5303 92.8523 10.0758 97.6705 6.31818C102.519 2.5303 108.337 0.63636 115.125 0.63636C121.913 0.63636 127.716 2.5303 132.534 6.31818C137.383 10.0758 141.08 15.5303 143.625 22.6818C146.201 29.803 147.489 38.3939 147.489 48.4545C147.489 58.5758 146.216 67.2121 143.67 74.3636C141.125 81.4848 137.443 86.9242 132.625 90.6818C127.807 94.4091 121.973 96.2727 115.125 96.2727ZM115.125 86.2727C121.913 86.2727 127.186 83 130.943 76.4545C134.701 69.9091 136.58 60.5758 136.58 48.4545C136.58 40.3939 135.716 33.5303 133.989 27.8636C132.292 22.197 129.837 17.8788 126.625 14.9091C123.443 11.9394 119.61 10.4545 115.125 10.4545C108.398 10.4545 103.14 13.7727 99.3523 20.4091C95.5644 27.0151 93.6705 36.3636 93.6705 48.4545C93.6705 56.5151 94.5189 63.3636 96.2159 69C97.9129 74.6364 100.352 78.9242 103.534 81.8636C106.746 84.803 110.61 86.2727 115.125 86.2727ZM162.58 75.9091V66.6364L203.489 1.90909H210.216V16.2727H205.67L174.761 65.1818V65.9091H229.852V75.9091H162.58ZM206.398 95V73.0909V68.7727V1.90909H217.125V95H206.398Z"
                        fill="#86D1D6"
                    />
                </svg>
                <h2 className="text-lg font-bold text-primary-800 mb-8">Page Not Found</h2>
                <div className="flex flex-col justify-center items-center">
                    <Link href="/">
                        <CustomButton className="mb-3 w-32 font-bold">HOME</CustomButton>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;

function PageHead() {
    return (
        <Head>
            <title>404 Page Not Found - N.JY</title>
            <meta name="description" content="A personal website created, maintain by Jingyi Niu" />
            <meta name="keywords" content="Jingyi Niu, niujingyi, Personal website, Nextjs, Web App, Portfolio" />
            <meta name="author" content="Jingyi Niu" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
