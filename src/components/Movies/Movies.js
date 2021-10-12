import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';
import env from '../../env.json';
import { Link } from 'react-router-dom';
import { Container } from '../Styled/Container';


const MovieLink = styled(Link)`
    display: block;
    cursor: pointer;
    width: fit-content;
    font-size: ${env.fonts.mainFonts.subtitle.size};
    line-height: ${env.fonts.mainFonts.subtitle.line};
    :hover, :active {
        color: ${env.colors.orange};
    }
`;
const Title = styled.h2`
    font-size: ${env.fonts.mainFonts.subtitle.size};
    line-height: ${env.fonts.mainFonts.subtitle.line};
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
`;

const Movies = () => {
    const {
        getMovies: { moviesDb },
        calendar: { resetMovie }
    } = useContext(Context);

    useEffect(() => resetMovie(), [resetMovie]);

    return (
        <Container>
            <Title>Выберите фильм</Title>
            {moviesDb && moviesDb.map(item =>
                <MovieLink to={`/movie/${item.id}`} key={item.id}>{item.ruTitle}</MovieLink>
            )}
        </Container>
    );
}
export default Movies;