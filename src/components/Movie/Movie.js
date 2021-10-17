import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Context } from '../Context';
// hooks
import { useGetSessionsDb } from '../Hooks/useGetSessionsDb';
// components
import Details from './Details';
import FilmInfo from './FilmInfo';
import Calendar from '../Calendar';
import Odeum from '../Odeum';
import Total from '../Total';
import { ErrorLoad, Preloader } from '../Styled/Preloader';
import Page404 from '../Page404';
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
    const getSessionsDb = useGetSessionsDb();
    const { sessionsDb, error, loading } = getSessionsDb;
    const {
        getMovies: { moviesObj },
        backgroundImg: { setBackgroundImg },
        calendar: { setActiveMovie, setActiveMovieSessions, activeMovieSessions, activeSession },
        // getSessions: { sessionsDb, error, loading },
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
        }
    }, [selectMovie,
        setActiveMovie,
        setBackgroundImg,
        sessionsDb,
        setActiveMovieSessions,
        movie
    ]);

    //******************************************* */
    return (
        <>
        {selectMovie && sessionsDb &&
            <Wrapper>
                <FilmInfo selectMovie={selectMovie}/>
                <Details selectMovie={selectMovie}/>
                <Calendar/>
                <Odeum/>
                <Total/>
            </Wrapper>
        }
        {loading && <Preloader/>}
        {error && <ErrorLoad>Sorry, nework error. We will fix it soon...</ErrorLoad>}
        {moviesObj && !(movie in moviesObj) && <Page404/>}
        </>
    );
}
export default Movie;