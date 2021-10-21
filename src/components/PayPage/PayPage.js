import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Context';
// functions
import { formatDate } from '../../functions/formatDate';
import { declOfNum } from '../../functions/declOfNum';
// components
import { Container } from '../Styled/Container';

const {
    mainText: { size: mainSize, line: mainLine },
    mainFonts: {
        subtitle: {
            size: subSize,
            line: subLine
        }
    }
} = env.fonts;
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
//**************************** */
const PayPage = () => {
    const {
        reserved: {
            reserved,
            localTotal,
        },
        getMovies: {
            moviesObj,
        }
    } = useContext(Context);

    const {
        reservedDate,
        reservedMovie,
        reservedCinema,
        reservedSession,
        reservedPlaces
    } = reserved;

    // titles preparation
    const ticketCount = reservedPlaces.length;
    const ticketCountTitle = declOfNum(ticketCount, ['билет', 'билета', 'билетов']);
    const movieTitle = moviesObj[reservedMovie].ruTitle;
    const formatedDate = formatDate(reservedDate.date);
    const sessionTitle = declOfNum(+reservedSession.substring(0, 2), ['час', 'часа', 'часов']);
    const placesString = reservedPlaces.reverse()
        .reduce((acc, item) => acc += ` ряд ${item[0]} место ${item[1]},`, '')
        .slice(0, -1);

    return (
        <Container>
            <Title>Ваш заказ:</Title>
            <Text>{ticketCount} {ticketCountTitle}</Text>
            <Text>На фильм "{movieTitle}"</Text>
            <Text>{formatedDate}, сеанс в {reservedSession} {sessionTitle}</Text>
            <Text>Кинотеатр: {reservedCinema}</Text>
            <Text>Вы бронируете: {placesString}</Text>
            <Text>Сумма к оплате: {localTotal}</Text>
        </Container>
    );
}
export default PayPage;