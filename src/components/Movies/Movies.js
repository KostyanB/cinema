import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';
import env from '../../env.json';
import { Link } from 'react-router-dom';
import { Container } from '../Styled/Container';
//env
const { size: subSize, line: subLine } = env.fonts.mainFonts.subtitle;
//styled
const MovieLink = styled(Link)`
    display: block;
    cursor: pointer;
    width: fit-content;
    font-size: ${subSize};
    line-height: ${subLine};
    :hover, :active {
        color: ${env.colors.orange};
    }
`;
const Title = styled.h2`
    font-size: ${subSize};
    line-height: ${subLine};
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
            {moviesDb.map(item =>
                <MovieLink to={`/movie/${item.id}`} key={item.id}>{item.ruTitle}</MovieLink>
            )}
        </Container>
    );
}
export default Movies;