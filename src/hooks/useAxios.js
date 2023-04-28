import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const useAxios = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const cancelTokenRef = useRef(null);

    useEffect(() => {
        return () => {
            // Cleanup function
            cancelTokenRef.current?.cancel('Request was cancelled');
        };
    }, []);

    const request = async (config) => {
        setIsLoading(true);
        setError(null);

        try {
            cancelTokenRef.current = axios.CancelToken.source();
            const response = await axios({
                cancelToken: cancelTokenRef.current.token,
                ...config,
            });

            setData(response.data);
            setError(null);
        } catch (error) {
            if (!axios.isCancel(error)) {
                setError(error);
            }
        } finally {
            setIsLoading(false);
        }

    };

    const get = (url, config) => {
        return request({ method: 'get', url, ...config });
    };

    const post = (url, data, config) => {
        return request({ method: 'post', url, data, ...config });
    };

    const put = (url, data, config) => {
        return request({ method: 'put', url, data, ...config });
    };

    const patch = (url, data, config) => {
        return request({ method: 'patch', url, data, ...config });
    };

    const del = (url, config) => {
        return request({ method: 'delete', url, ...config });
    };

    return { data, error, isLoading, get, post, put, patch, del };
};

export default useAxios;
