import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';
import { formatDate } from '../../functions/formatDate';
import { declOfNum } from '../../functions/declOfNum';
// components
import { Container } from '../Styled/Container';
//env
import env from '../../env.json';
const { size: subSize, line: subLine } = env.fonts.mainFonts.subtitle;
const { size: mainSize, line: mainLine } = env.fonts.mainFont;
//styled
const Title = styled.h2`
    font-size: ${subSize};
    line-height: ${subLine};
    margin-bottom: 15px;
`;
const Text = styled.p`
    font-size: ${mainSize};
    line-height: ${mainLine};
    &:not(:last-of-type) {
        margin-bottom: 10px;
    }
`;

const PayPage = () => {
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
export default PayPage;