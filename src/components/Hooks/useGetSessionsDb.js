import { useState, useEffect } from 'react';
import env from '../../env.json';
import { useLoading } from './useLoading'
import { fetchFromDb } from '../../functions/fetchFromDb';

export const useGetSessionsDb = () => {
    const { setLoading, setError } = useLoading();
    const [ sessionsDb, setSessionsDb ] = useState(null);

    useEffect(() => fetchFromDb({
        url: env.backend.sessionsDbUrl,
        loadingFn: setLoading,
        successFn: setSessionsDb,
        errorFn: setError
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []);

    return {
        sessionsDb,
        setSessionsDb,
    };
};