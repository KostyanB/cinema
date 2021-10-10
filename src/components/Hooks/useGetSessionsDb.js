import { useState } from 'react';
import env from '../../env.json';

export const useGetSessionsDb = () => {
    const [ sessionsDb, setSessionsDb ] = useState(null);

    const getSessionsDb = async () => {
        const json = await fetch(env.backend.sessionsDbUrl);
        const res = await json.json();
        setSessionsDb(res);
    };

    return {
        sessionsDb,
        setSessionsDb,
        getSessionsDb
    };
};