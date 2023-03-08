import { useState } from 'react';
import axiosClient from '../axios.config';

interface MutationType {
    url: string;
    method?: string;
}

const useMutation = ({ url, method = 'POST' }: MutationType) => {
    const [state, setState] = useState({
        isLoading: false,
        error: '',
        success: false,
    });

    const handleRequest = async (data: any) => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        axiosClient({ url, method, data })
            .then(() => {
                setState({ isLoading: false, error: '', success: true });
            })
            .catch((error: Error) => {
                setState({ isLoading: false, error: error.message, success: false });
            });
    };

    return { mutate: handleRequest, ...state };
};

export default useMutation;
