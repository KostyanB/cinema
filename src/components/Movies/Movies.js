import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';
import env from '../../env.json';
import { Link } from 'react-router-dom';
import { Container } from '../Styled/Container';

//styled
const MovieLink = styled(Link)`
    display: block;
    cursor: pointer;
    width: fit-content;
    font-size: ${props => props.size};
    line-height: ${props => props.line};
    :hover, :active {
        color: ${env.colors.orange};
    }
`;
const Title = styled.h2`
    font-size: ${props => props.size};
    line-height: ${props => props.line};
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
`;

const Movies = () => {
    const {
        size,
        line
    } = env.fonts.mainFonts.subtitle;
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
            <Title size={size} line={line}>
                Выберите фильм
            </Title>
            {moviesDb.map(item =>
                <MovieLink to={`/movie/${item.id}`}
                    key={item.id}
                    size={size}
                    line={line}
                >
                    {item.ruTitle}
                </MovieLink>
            )}
        </Container>
    );
}
export default Movies;