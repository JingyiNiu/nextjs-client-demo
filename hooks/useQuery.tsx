import { useEffect, useState } from 'react';
import axiosClient from '../axios.config';

interface QueryType {
    url: string;
}

const useQuery = ({ url }: QueryType) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: '',
        success: false,
    });

    useEffect(() => {
        const fetch = async () => {
            axiosClient
                .get(url)
                .then(({ data }: any) =>
                    setState({ data, isLoading: false, error: '', success: true })
                )
                .catch((error: Error) =>
                    setState({ data: null, isLoading: false, error: error.message, success: false })
                );
        };

        fetch();
    }, [url]);

    return state;
};

export default useQuery;
