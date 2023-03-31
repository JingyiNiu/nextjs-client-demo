import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FormEvent, useRef, useState } from 'react';
import BackToHome from '../../components/back-to-home';
import CustomButton from '../../components/custom-button';
import Layout from '../../components/layout';
import en from '../../locales/en/upload_image_en';
import zh from '../../locales/zh/upload_image_zh';
import useMutation from '../../hooks/useMutation';

const ImageUploadPage = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'zh' ? zh : en;

    const [imageFile, setImageFile] = useState<Blob | null>(null);
    const [previewImage, setPreviewImage] = useState('');
    const [fileError, setFileError] = useState('');

    const API_END_POINT = '/api/image';
    const { mutate: uploadImage, isLoading, error: uoloadError } = useMutation({ url: API_END_POINT });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageFile(null);
        setPreviewImage('');
        setFileError('');

        const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];

        if (!e.target || !e.target.files) {
            return;
        }

        const file = e.target.files[0];

        if (!file) {
            return;
        }

        if (!validFileTypes.find((type) => type === file.type)) {
            setFileError('File must be in JPG/PNG format');
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

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        imageFile && formData.append('image', imageFile);

        setFileError('This function has been deprecated');
    };

    return (
        <Layout>
            <PageHead />
            <>
                <BackToHome />
                <h1 className={`text-xl font-bold my-4 text-center`}>{t.title}</h1>
                <div className={`flex flex-col items-center`}>
                    <CustomButton onClick={handleUploadImage} buttonStyles={1} className="max-w-xs">
                        {t.selectImageButton}
                    </CustomButton>
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
                    {previewImage ? (
                        <div className={`relative w-60 h-60 my-5`}>
                            <Image src={previewImage} fill={true} alt="Preview" className={`object-cover`} />
                        </div>
                    ) : (
                        <p className={`my-3`}>{t.text}</p>
                    )}
                    <CustomButton onClick={handleSubmit} disabled={isLoading} className="mb-3 max-w-xs">
                        {t.uploadImageButton}
                    </CustomButton>

                    {(fileError || uoloadError) && (
                        <div className={`text-rose-500 rounded-md p-4 w-full max-w-xs bg-rose-50`}>
                            <p>{fileError}</p>
                            <p>{uoloadError}</p>
                        </div>
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
            <meta name="keywords" content="Jingyi Niu, niujingyi, Personal website, Nextjs, Web App, Portfolio" />
            <meta name="author" content="Jingyi Niu" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export default ImageUploadPage;
