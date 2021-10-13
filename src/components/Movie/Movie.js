import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Context } from '../Functions/Context';
// hooks
import { useAsync } from '../Hooks/useAsync';
// components
import Details from './Details';
import FilmInfo from './FilmInfo';
import Calendar from '../Calendar';
import Odeum from '../Odeum';
import Total from '../Total';
// styled
const Wrapper = styled.section`
    width: 100vw;
    height: 724px;
    padding-top: 60px;
    position: relative;
`;

const Movie = () => {
    const { movie } = useParams();
    const {
        getMovies: { moviesObj },
        backgroundImg: { setBackgroundImg },
        calendar: { setActiveMovie, setActiveMovieDb },
        getSessions: { sessionsDb, getSessionsDb },
    } = useContext(Context);

    const selectMovie = moviesObj && moviesObj[movie];
    // установка фона и активного фильма
    useEffect(() => {
        if (selectMovie) {
            setBackgroundImg(selectMovie.photo);
            setActiveMovie(selectMovie.id);
        }
        if (sessionsDb) {
            setActiveMovieDb(sessionsDb[movie]);

        };
    }, [selectMovie, setActiveMovie, setBackgroundImg, sessionsDb, setActiveMovieDb, movie]);

     // получение времени сеансов
    const asyncTask = async () => {
        getSessionsDb();
    };
    const { execute } = useAsync({
        asyncFn: asyncTask
    });
    useEffect(() => execute(), []);


    //******************************************* */
    return (
        <>
        {selectMovie &&
            <Wrapper>
                <FilmInfo subtitle={selectMovie.enTitle}
                    title={selectMovie.ruTitle}
                    description={selectMovie.description}
                />
                <Details time={selectMovie.timing}
                    rate={selectMovie.imdbRate}
                />
                <Calendar/>
                <Odeum/>
                <Total/>
            </Wrapper>
        }
        </>
    );
}
export default Movie;