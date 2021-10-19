import { useState, useEffect } from 'react';
import env from '../../env.json';
import getDateArr from '../../functions/getDateArr';

export const useCalendar = () => {
    const {cinemas, showPeriod} = env.calendar;
    const [ dateArr, setDateArr ] = useState(null);
    const [ activeMovie, setActiveMovie ] = useState(null);
    const [ activeMovieSessions, setActiveMovieSessions ] = useState(null);
    const [ activeDate, setActiveDate ] = useState(null);
    const [ activeCinema, setActiveCinema ] = useState(null);
    const [ activeSession, setActiveSession ] = useState(null);
    const [ cinemasList, setCinemasList ] = useState(null);

    useEffect(() => {
        const arrDate = getDateArr(showPeriod);
        setCinemasList(cinemas);
        setActiveCinema(cinemas[0]);
        setDateArr(arrDate);
        setActiveDate(arrDate[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        cinemasList,
        setCinemasList,
        setActiveMovieSessions,
        activeMovieSessions
    };
};