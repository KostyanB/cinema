import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';
import env from '../../env.json';
import { Link } from 'react-router-dom';
import Container from '../Styled/Container';

const { size, line } = env.fonts.mainFonts.subtitle;
//styled
const MovieLink = styled(Link)`
    display: block;
    cursor: pointer;
    width: fit-content;
    font-size: ${size};
    line-height: ${line};
    :hover, :active {
        color: ${env.colors.hoverColor};
    }
`;
const Title = styled.h2`
    font-size: ${size};
    line-height: ${line};
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
`;

const Movies = () => {
    const {
        getMovies: {
            moviesDb
        },
        calendar: {
            resetMovie
        }
    } = useContext(Context);

    useEffect(() => resetMovie(), [resetMovie]);

    return (
        <Container>
            <Title>Выберите фильм</Title>
            {moviesDb && moviesDb.map(item =>
                <MovieLink to={`/movie/${item.id}`}
                    key={item.id}
                >
                    {item.ruTitle}
                </MovieLink>
            )}
        </Container>
    );
}
export default Movies;