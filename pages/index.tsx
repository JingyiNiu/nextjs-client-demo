import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FormEvent, useRef, useState } from 'react';

import { apiUrl } from '../enviroments';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    const [imageFile, setImageFile] = useState<Blob | undefined>(undefined);
    const [description, setDescription] = useState('');
    const [previewImage, setPreviewImage] = useState<any>();

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(1);
        if (e.target && e.target.files) {
            const file = e.target.files[0];
            console.log(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(e.target.files[0]);
            setImageFile(file);
        }
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        imageFile && formData.append('image', imageFile);
        formData.append('description', description);

        await axios.post(`${apiUrl}/api/imageupload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    };

    return (
        <div className={styles.app}>
            <Head>
                <title>N.JY</title>
                <meta
                    name="description"
                    content="A personal website created, maintain by Jingyi Niu"
                />
                <meta
                    name="keywords"
                    content="Jingyi Niu, niujingyi, Personal website, Nextjs, Web App, Portfolio"
                />
                <meta name="author" content="Jingyi Niu" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.header}>
                    <div className="">
                        <Link href="/">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 1000 1000"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_1_2)">
                                    <circle cx="500" cy="500" r="500" fill="#86D1D6" />
                                    <path
                                        d="M339.233 280.234C311.735 300.438 313.143 583.163 317.284 722H369.05C371.397 617.113 377.002 405.435 380.646 397.817C385.201 388.295 586.883 722 649.417 722C699.443 722 687.24 427.489 675.921 280.234H639.892C638.373 385.535 632.106 599.117 619.185 611.041C603.034 625.946 373.606 254.978 339.233 280.234Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_2">
                                        <rect width="1000" height="1000" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.title}>Hi there</div>
                        <div className={styles.imageUpload}>
                            <form>
                                <input
                                    id="imageUpload"
                                    onChange={handleFileChange}
                                    type="file"
                                    accept="image/*"
                                ></input>
                                <input
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    type="text"
                                    placeholder="Description"
                                ></input>
                                <button onClick={handleSubmit}>Submit</button>
                            </form>
                            <div className={styles.imagePreview}>
                                {previewImage ? (
                                    <Image
                                        src={previewImage}
                                        fill={true}
                                        alt="Preview"
                                        style={{ objectFit: 'cover' }}
                                    />
                                ) : (
                                    'Select an image'
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
