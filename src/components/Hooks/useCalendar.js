import { useState, useEffect } from 'react';
import env from '../../env.json';

export const useCalendar = () => {
    const [ activeMovie, setActiveMovie ] = useState(null);
    const [ activeMovieDb, setActiveMovieDb ] = useState(null);
    const [ activeDay, setActiveDay ] = useState(null);
    const [ activeDate, setActiveDate ] = useState(null);
    const [ activeCinema, setActiveCinema ] = useState(null);
    const [ activeSession, setActiveSession ] = useState(null);

    useEffect(() => setActiveCinema(env.calendar.cinemas[0]), []);

    const resetMovie = () => setActiveMovie(null);

    return {
        activeMovie,
        resetMovie,
        setActiveMovie,
        activeDay,
        setActiveDay,
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