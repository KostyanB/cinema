import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import env from '../../env.json';
import { Context } from '../Functions/Context';
import Details from './Details';
import FilmInfo from './FilmInfo';
import Schedule from '../Schedule';

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
        backgroundImg: { setBackgroundImg }
    } = useContext(Context);

    const selectMovie = moviesObj && moviesObj[movie];

    useEffect(() => selectMovie && setBackgroundImg(selectMovie.photo));

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
                <Schedule/>
            </Wrapper>
        }
        </>


    );
}
export default Movie;