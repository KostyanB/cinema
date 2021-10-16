import { useState, useEffect } from 'react';
import env from '../../env.json';
import getDateArr from '../../functions/getDateArr';

export const useCalendar = () => {
    const [ dateArr, setDateArr ] = useState(null);
    const [ activeMovie, setActiveMovie ] = useState(null);
    const [ activeMovieDb, setActiveMovieDb ] = useState(null);
    const [ activeDate, setActiveDate ] = useState(null);
    const [ activeCinema, setActiveCinema ] = useState(null);
    const [ activeSession, setActiveSession ] = useState(null);

    useEffect(() => {
        const arrDate = getDateArr(env.calendar.showPeriod);
        setActiveCinema(env.calendar.cinemas[0]);
        setDateArr(arrDate);
        setActiveDate(arrDate[0]);
    }, []);

    const resetMovie = () => setActiveMovie(null);

    return {
        dateArr,
        activeMovie,
        resetMovie,
        setActiveMovie,
        activeDate,
        setActiveDate,
        activeCinema,
        setActiveCinema,
        activeSession,
        setActiveSession,
        setActiveMovieDb,
        activeMovieDb
    };
};