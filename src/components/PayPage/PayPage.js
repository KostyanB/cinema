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
        resDate,
        resMovie,
        resCinema,
        resSession,
        resPlaces
    } = reserved;

    // titles preparation
    const ticketCount = resPlaces.length;
    const ticketCountTitle = declOfNum(ticketCount, ['билет', 'билета', 'билетов']);
    const movieTitle = moviesObj[resMovie].ruTitle;
    const formatedDate = formatDate(resDate.date);
    const sessionTitle = declOfNum(+resSession.substring(0, 2), ['час', 'часа', 'часов']);
    const placesString = resPlaces.reverse()
        .reduce((acc, item) => acc += ` ряд ${item[0]} место ${item[1]},`, '')
        .slice(0, -1);

    return (
        <Container>
            <Title>Ваш заказ:</Title>
            <Text>{ticketCount} {ticketCountTitle}</Text>
            <Text>На фильм "{movieTitle}"</Text>
            <Text>{formatedDate}, сеанс в {resSession} {sessionTitle}</Text>
            <Text>Кинотеатр: {resCinema}</Text>
            <Text>Вы бронируете: {placesString}</Text>
            <Text>Сумма к оплате: {localTotal}</Text>
        </Container>
    );
}
export default PayPage;