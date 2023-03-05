import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FormEvent, useRef, useState } from 'react';
import Layout from '../components/layout';

import { apiUrl } from '../enviroments';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    const [imageFile, setImageFile] = useState<Blob | undefined>(undefined);
    const [previewImage, setPreviewImage] = useState('');
    const [error, setError] = useState('');

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('');
        setImageFile(undefined);
        setPreviewImage('');

        const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];

        if (e.target && e.target.files) {
            const file = e.target.files[0];

            if (!validFileTypes.find((type) => type === file.type)) {
                setError('File must be in JPG/PNG format');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(e.target.files[0]);
            setImageFile(file);
        }
    };

    const handleUploadImage = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        imageFile && formData.append('image', imageFile);

        axios
            .post(`${apiUrl}/api/imageupload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then()
            .catch((error) => setError(error.message));
    };

    return (
        <Layout>
            <PageHead />
            <>
                <div className={styles.title}>Hi there</div>
                <div className={styles.imageUpload}>
                    <button type="button" onClick={handleUploadImage}>
                        Select an image
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <button onClick={handleSubmit}>Upload</button>
                    {error && <p>{error}</p>}
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
            </>
        </Layout>
    );
};

export default Home;

function PageHead() {
    return (
        <Head>
            <title>N.JY</title>
            <meta name="description" content="A personal website created, maintain by Jingyi Niu" />
            <meta
                name="keywords"
                content="Jingyi Niu, niujingyi, Personal website, Nextjs, Web App, Portfolio"
            />
            <meta name="author" content="Jingyi Niu" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
