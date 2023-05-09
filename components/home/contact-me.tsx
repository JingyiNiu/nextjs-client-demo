import React, { useState } from 'react';
import { TransProps } from '../../interfaces/HomeText';
import useMutation from '../../hooks/useMutation';
import CustomTitle from '../custom/custom-title';
import CustomInput from '../custom/custom-input';
import CustomTextarea from '../custom/custom-textarea';
import CustomButton from '../custom/custom-button';
import axios from 'axios';
import axiosClient from '../../axios.config';

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
    const [state, setState] = useState({
        isLoading: false,
        isSuccess: false,
        error: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axiosClient
            .post(API_END_POINT, formData)
            .then((res) => {
                handleSuccess();
            })
            .catch((err) => {
                handleError(err);
            });
    };

    const handleSuccess = () => {
        setFormData(initialFormData);
        setState({ ...state, isSuccess: true, error: '' });
        setTimeout(() => {
            setState({ ...state, isSuccess: false, error: '' });
        }, 2000);
    };

    const handleError = (err: any) => {
        const error = err.response.data.message ? err.response.data.message : 'There is something wrong, please try again later';
        setState({ ...state, error });
    };

    return (
        <div className="my-8">
            <CustomTitle>{t.contactMe.title}</CustomTitle>
            <p>{t.contactMe.content}</p>
            <form onSubmit={handleFormSubmit} className="max-w-lg relative">
                <CustomInput type="text" label={t.contactMe.form.name} name="name" onChange={handleInputChange} value={formData.name} required />
                <CustomInput type="text" label={t.contactMe.form.email} name="email" onChange={handleInputChange} value={formData.email} required />
                <CustomTextarea
                    rows={4}
                    label={t.contactMe.form.message}
                    name="message"
                    onChange={handleInputChange}
                    value={formData.message}
                    required
                />
                <CustomButton className="w-full" type="submit" disabled={state.isLoading}>
                    {t.contactMe.form.button}
                </CustomButton>
                {state.error && (
                    <div className={`my-4 text-rose-500 rounded-md p-4 w-full max-w-lg bg-rose-50`}>
                        <p>{state.error}</p>
                    </div>
                )}
                {state.isSuccess && (
                    <div className="absolute-center bg-green-100 text-green-500 rounded-lg font-bold p-4 max-w-lg">
                        {t.contactMe.form.successMessage}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactMe;
