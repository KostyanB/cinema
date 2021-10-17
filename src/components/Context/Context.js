import React, { createContext } from 'react';
import { useGetMoviesDb } from '../Hooks/useGetMoviesDb';
import { useGetSessionsDb } from '../Hooks/useGetSessionsDb';
import { useBackgroundImg } from '../Hooks/useBackgroundImg';
import { useCalendar } from '../Hooks/useCalendar';
import { useReserveTicket } from '../Hooks/useReserveTicket';

export const Context = createContext();

export const ContextProvider = (props) => {
    const getMovies = useGetMoviesDb();
    const getSessions = useGetSessionsDb();
    const backgroundImg = useBackgroundImg();
    const calendar = useCalendar();
    const reserved = useReserveTicket();

    return (
        <Context.Provider  value={{
            getMovies,
            getSessions,
            backgroundImg,
            calendar,
            reserved,
        }}>
            {props.children}
        </Context.Provider>
    );
};

