import { useState, useEffect } from 'react';
import env from '../../env.json';
import { useLoading } from './useLoading'
import { fetchFromDb } from '../../functions/fetchFromDb';

export const useGetMoviesDb = () => {
    const { setLoading, setError } = useLoading();
    const [ moviesDb, setMoviesDb ] = useState(null);
    const [ moviesObj, setMoviesObj ] = useState(null);

    const handleMoviesDb = res => {
        const obj = {};

        res.forEach(item => {
            obj[item.id] = item;
        });

        setMoviesDb(res);
        setMoviesObj(obj);
    };

    useEffect(() => fetchFromDb({
        url: env.backend.moviesDbUrl,
        loadingFn: setLoading,
        successFn: handleMoviesDb,
        errorFn: setError
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []);

    return {
        moviesDb,
        moviesObj,
    };
};