import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Context } from '../Functions/Context';
import Details from './Details';
import FilmInfo from './FilmInfo';
import Calendar from '../Calendar';
import Odeum from '../Odeum';
import Total from '../Total';

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
        calendar: { setActiveMovie },
    } = useContext(Context);

    const selectMovie = moviesObj && moviesObj[movie];

    useEffect(() => {
        if (selectMovie) {
            setBackgroundImg(selectMovie.photo);
            setActiveMovie(selectMovie.id)
        }
    }, [selectMovie, setActiveMovie, setBackgroundImg]);

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