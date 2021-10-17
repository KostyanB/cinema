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
        calendar: {
            activeMovie,
            activeDate,
            activeCinema,
            activeSession,
        },
        reserved: {
            reserved,
            localTotal,
        },
        getMovies: {
            moviesObj,
        }
    } = useContext(Context);

    const ticketCount = reserved.length;
    const ticketCountTitle = declOfNum(ticketCount, ['билет', 'билета', 'билетов']);
    const movieTitle = moviesObj[activeMovie].ruTitle;
    const formatedDate = formatDate(activeDate.date);
    const formatedHour = declOfNum(+activeSession.substring(0, 2), ['час', 'часа', 'часов']);
    const places = reserved.reverse()
        .reduce((acc, item) => acc += ` ряд ${item[0]} место ${item[1]},`, '')
        .slice(0, -1);

        return (
        <Container>
            <Title>Ваш заказ:</Title>
            <Text>{ticketCount} {ticketCountTitle}</Text>
            <Text>На фильм "{movieTitle}"</Text>
            <Text>{formatedDate}, сеанс в {activeSession} {formatedHour}</Text>
            <Text>Кинотеатр: {activeCinema}</Text>
            <Text>Вы бронируете: {places}</Text>
            <Text>Сумма к оплате: {localTotal}</Text>
        </Container>
    );
}
export default PayPage;