import { useState } from 'react';
import axiosClient from '../axios.config';

interface MutationType {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

interface UseMutationState {
    isLoading: boolean;
    isSuccess: boolean;
    data: any;
    error: any;
}

const useMutation = ({ url, method = 'POST' }: MutationType) => {
    const [state, setState] = useState<UseMutationState>({
        isLoading: false,
        isSuccess: false,
        error: '',
        data: null,
    });

    const handleRequest = (data: any) => {
        setState({ isLoading: true, isSuccess: false, data: null, error: null });
        axiosClient({ url, method, data })
            .then((res) => {
                setState({ isLoading: false, isSuccess: true, error: '', data: res.data });
            })
            .catch((error: Error | any) => {
                const errorMessage = error.response.data.message ? error.response.data.message : error.message;
                setState({ isLoading: false, isSuccess: false, error: errorMessage, data: null });
            });
    };

    return { mutate: handleRequest, ...state };
};

export default useMutation;
