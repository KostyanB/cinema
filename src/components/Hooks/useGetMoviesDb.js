import { useEffect, useState } from 'react';
import env from '../../env.json';

export const useGetMoviesDb = () => {

    const [ moviesDb, setMoviesDb ] = useState(null);
    const [ moviesObj, setMoviesObj ] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ error, setError ] = useState(null);

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
    }


    // useEffect(() => {
    //     (async() => {
    //         try {
    //             setLoading(true);
    //             const json = await fetch(env.backend.moviesDbUrl);
    //             const res = await json.json();
    //             handleMoviesDb(res);
    //         } catch (err) {
    //             setError(err);
    //         }
    //         setLoading(false);
    //     })();
    // }, []);

    return { moviesDb, moviesObj, error, loading, handleMoviesDb, getMoviesDb };
};