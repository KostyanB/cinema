import { useState, useEffect, useCallback } from 'react';
import env from '../../env.json';
import { useLoading } from './useLoading'
import { fetchFromDb } from '../../functions/fetchFromDb';

export const useGetSessionsDb = () => {
    const { setLoading, setError } = useLoading();
    const [ sessionsDb, setSessionsDb ] = useState(null);

    const getSessionsDb = useCallback(() => fetchFromDb({
        url: env.backend.sessionsDbUrl,
        loadingFn: setLoading,
        successFn: setSessionsDb,
        errorFn: setError
    }), []);

    useEffect(() => getSessionsDb(), [getSessionsDb]);

    return {
        sessionsDb,
        setSessionsDb,
        getSessionsDb
    };
};