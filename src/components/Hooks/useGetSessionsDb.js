import { useState, useEffect, useCallback } from 'react';
import env from '../../env.json';

export const useGetSessionsDb = () => {
    const [ sessionsDb, setSessionsDb ] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getFetch = useCallback(async () => {
        try {
            setLoading(true);
            const json = await fetch(env.backend.sessionsDbUrl);
            const res = await json.json();
            setSessionsDb(res);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }, []);

    useEffect(() => getFetch(), [getFetch]);

    // const getSessionsDb = async () => {
    //     const json = await fetch(env.backend.sessionsDbUrl);
    //     const res = await json.json();
    //     setSessionsDb(res);
    // };

    return {
        sessionsDb,
        setSessionsDb,
        // getSessionsDb,
        error,
        loading
    };
};