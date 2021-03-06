import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Context } from '../Context';
// hooks
import { useGetSessionsDb } from '../Hooks/useGetSessionsDb';
// components
import Description from './Description';
import Calendar from './Calendar';
import Odeum from './Odeum';
import Total from './Total';
import Preloader from '../Styled/Loaders/Preloader';
import ErrorLoad from '../Styled/Loaders/ErrorLoad';
import Page404 from '../Styled/Page404';

// styled
const Wrapper = styled.section`
    width: 100vw;
    height: 724px;
    padding-top: 60px;
    position: relative;
`;
//***************************** */
const Movie = () => {
    const { movie } = useParams();
    const { sessionsDb } = useGetSessionsDb();
    const {
        loading: {
            error,
            loading
        },
        getMovies: { moviesObj },
        backgroundImg: { setBackgroundImg },
        calendar: {
            setActiveMovie,
            setActiveMovieSessions,
        },
        reserved: {
            clearReserved,
            reserved,
        },
    } = useContext(Context);

    const selectMovie = moviesObj && moviesObj[movie];
    // установка фона и активного фильма
    useEffect(() => {
        if (selectMovie) {
            setBackgroundImg(selectMovie.photo);
            setActiveMovie(selectMovie.id);
        }

        if (sessionsDb) {
            setActiveMovieSessions(sessionsDb[movie]);
            if (reserved && movie !== reserved.reservedMovie) {
                clearReserved();
            }
        }
    }, [
        selectMovie,
        setActiveMovie,
        setBackgroundImg,
        sessionsDb,
        setActiveMovieSessions,
        movie,
        reserved,
        clearReserved,
    ]);

    //******************************************* */
    return (
        <>
        {selectMovie && sessionsDb &&
            <Wrapper>
                <Description selectMovie={selectMovie}/>
                <Calendar/>
                <Odeum/>
                <Total/>
            </Wrapper>
        }
        {loading && <Preloader/>}
        {error && <ErrorLoad/>}
        {moviesObj && !(movie in moviesObj) && <Page404/>}
        </>
    );
}
export default Movie;