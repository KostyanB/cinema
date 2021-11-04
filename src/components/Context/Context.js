import React, { createContext } from 'react';
import { useGetMoviesDb } from '../Hooks/useGetMoviesDb';
import { useLoading } from '../Hooks/useLoading';
import { useBackgroundImg } from '../Hooks/useBackgroundImg';
import { useCalendar } from '../Hooks/useCalendar';
import { useReserveTicket } from '../Hooks/useReserveTicket';

export const Context = createContext();

export const ContextProvider = props => {
    const getMovies = useGetMoviesDb();
    const loading = useLoading();
    const backgroundImg = useBackgroundImg();
    const calendar = useCalendar();
    const reserved = useReserveTicket();

    return (
        <Context.Provider  value={{
            getMovies,
            loading,
            backgroundImg,
            calendar,
            reserved,
        }}>
            {props.children}
        </Context.Provider>
    );
};