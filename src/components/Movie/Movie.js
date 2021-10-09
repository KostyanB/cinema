import React, { useContext } from 'react';
// import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Context } from '../Functions/Context';
import env from '../../env.json';
import { Container } from '../Styled/Container';

const Movie = () => {
    const { movie } = useParams();
    const {
        getMovies: { moviesObj },
        // selectedMovie: { selectedMovie, setSelectedMovie }
    } = useContext(Context);

    const selectMovie = moviesObj && moviesObj[movie];

    return (
        <>
        {selectMovie &&
            <Container>
            <h2>{ selectMovie.ruTitle }</h2>
            </Container>
        }
        </>


    );
}
export default Movie;