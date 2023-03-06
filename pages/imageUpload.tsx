import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FormEvent, useRef, useState } from 'react';
import CustomButton from '../components/button';
import CustomButton2 from '../components/customButton';
import Layout from '../components/layout';

import { apiUrl } from '../enviroments';

const ImageUploadPage = () => {
    const [imageFile, setImageFile] = useState<Blob | null>(null);
    const [previewImage, setPreviewImage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('');
        setImageFile(null);
        setPreviewImage('');

        const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];

        if (!e.target || !e.target.files) {
            return;
        }

        const file = e.target.files[0];

        if (!file) {
            return;
        }

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
    };

    const handleUploadImage = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData();
        imageFile && formData.append('image', imageFile);

        axios
            .post(`${apiUrl}/api/imageupload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then(() => setLoading(false))
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    };

    return (
        <Layout>
            <PageHead />
            <>
                <h1 className={`text-xl font-bold my-4 text-center`}>Image uploading page</h1>
                <div className={`flex flex-col items-center`}>
                    <CustomButton onClick={handleUploadImage} buttonStyles={1}>
                        Select an image
                    </CustomButton>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />

                    {previewImage ? (
                        <div className={`relative w-60 h-60 my-5`}>
                            <Image
                                src={previewImage}
                                fill={true}
                                alt="Preview"
                                className={`object-cover`}
                            />
                        </div>
                    ) : (
                        <p className={`my-3`}>Select an image to upload</p>
                    )}

                    <CustomButton onClick={handleSubmit} disabled={loading} className="mb-3">
                        Upload
                    </CustomButton>

                    {error && (
                        <>
                            <p className={`text-rose-400`}>{error}</p>
                            <p className={`text-rose-400`}>Please try again later</p>
                        </>
                    )}
                </div>
            </>
        </Layout>
    );
};

function PageHead() {
    return (
        <Head>
            <title>Image uplaod - N.JY</title>
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

export default ImageUploadPage;
