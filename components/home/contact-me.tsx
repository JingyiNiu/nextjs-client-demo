import React, { useState } from 'react';
import { TransProps } from '../../interfaces/HomeText';
import useMutation from '../../hooks/useMutation';
import CustomTitle from '../custom/custom-title';
import CustomInput from '../custom/custom-input';
import CustomTextarea from '../custom/custom-textarea';
import CustomButton from '../custom/custom-button';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

interface Props {
    t: TransProps;
}

const ContactMe = ({ t }: Props) => {
    const API_END_POINT = '/api/contact';
    const initialFormData = {
        name: '',
        email: '',
        message: '',
    };
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const {
        mutate: submitContactForm,
        isLoading,
        error: contactError,
        success: isSuccess,
    } = useMutation({ url: API_END_POINT });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await submitContactForm(formData);
        isSuccess && successMessage();
        isSuccess && setFormData(initialFormData);
    };

    const successMessage = () => {
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 2000);
    };
    return (
        <div className="my-8">
            <CustomTitle>{t.contactMe.title}</CustomTitle>
            <p>{t.contactMe.content}</p>
            <form onSubmit={handleFormSubmit} className="max-w-lg relative">
                <CustomInput
                    type="text"
                    label={t.contactMe.form.name}
                    name="name"
                    onChange={handleInputChange}
                    value={formData.name}
                    required
                />
                <CustomInput
                    type="text"
                    label={t.contactMe.form.email}
                    name="email"
                    onChange={handleInputChange}
                    value={formData.email}
                    required
                />
                <CustomTextarea
                    rows={4}
                    label={t.contactMe.form.message}
                    name="message"
                    onChange={handleInputChange}
                    value={formData.message}
                    required
                />
                <CustomButton type="submit" disabled={isLoading}>
                    {t.contactMe.form.button}
                </CustomButton>
                {contactError && (
                    <div className={`my-4 text-rose-500 rounded-md p-4 w-full max-w-lg bg-rose-50`}>
                        <p>{contactError}</p>
                    </div>
                )}
                {showSuccessMessage && (
                    <div className="absolute-center bg-green-100 text-green-500 rounded-lg font-bold p-4 max-w-lg">
                        {t.contactMe.form.successMessage}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactMe;
