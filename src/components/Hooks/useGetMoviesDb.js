import { useState } from 'react';
import env from '../../env.json';

export const useGetMoviesDb = () => {

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

    const getMoviesDb = async () => {
        const json = await fetch(env.backend.moviesDbUrl);
        const res = await json.json();
        handleMoviesDb(res);
    };

    return {
        moviesDb,
        moviesObj,
        handleMoviesDb,
        getMoviesDb
    };
};