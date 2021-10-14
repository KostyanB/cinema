import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Functions/Context';
import { formatDate } from '../Functions/formatDate';
import { declOfNum } from '../Functions/declOfNum';
// components
import { Container } from '../Styled/Container';

const Title = styled.h2`
    font-size: ${env.fonts.mainFonts.subtitle.size};
    line-height: ${env.fonts.mainFonts.subtitle.line};
    margin-bottom: 15px;
`;
const Text = styled.p`
    font-size: ${env.fonts.mainFont.size};
    line-height: ${env.fonts.mainFont.line};
    &:not(:last-of-type) {
        margin-bottom: 10px;
    }

`;

const SomePage = () => {

    const {
        calendar: {
            activeMovie,
            activeDate,
            activeCinema,
            activeSession,
        },
        reserved: {
            reserved,
            total,
        },
        getMovies: {
            moviesObj,
        }
    } = useContext(Context);

    const formatPlaces = () => reserved.reverse()
        .reduce((acc, item) => acc += ` ряд ${item[0]} место ${item[1]},`, '')
        .slice(0, -1);

    return (
        <Container>
            <Title>Ваш заказ:</Title>
            <Text>{reserved.length} {declOfNum(reserved.length, ['билет', 'билета', 'билетов'])}</Text>
            <Text>На фильм "{moviesObj[activeMovie].ruTitle}"</Text>
            <Text>{formatDate(activeDate.date)}, сеанс в {activeSession}</Text>
            <Text>Кинотеатр: {activeCinema}</Text>
            <Text>Вы бронируете: {formatPlaces()}</Text>
            <Text>Сумма к оплате: {total} &#8381;</Text>
        </Container>
    );
}
export default SomePage;