import React, { useState, useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Context';
// functions
import { formatDate } from '../../functions/formatDate';
import { declOfNum } from '../../functions/declOfNum';
// components
import { Container } from '../Styled/Container';
import { Link } from 'react-router-dom';

const {
    colors: { hoverColor },
    fonts: {
        mainText: { size: mainSize, line: mainLine },
        mainFonts: {
            subtitle: {
                size: subSize,
                line: subLine
            }
        }
    }
} = env;
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
const BackLink = styled(Link)`
    &:hover, :active {
        color: ${hoverColor};
    }
`;
//**************************** */
const PayPage = () => {
    const [ titles, setTitles ] = useState(null);
    const {
        reserved: {
            reserved,
            localTotal,
        },
        getMovies: {
            moviesObj,
        }
    } = useContext(Context);

    // установка текстов для отборажения резерва
    const titlesPreparation =  useCallback(reserved => {
        const {
            reservedDate,
            reservedMovie,
            reservedCinema,
            reservedSession,
            reservedPlaces
        } = reserved;

        const ticketCount = reservedPlaces.length;
        const ticketCountTitle = declOfNum(ticketCount, ['билет', 'билета', 'билетов']);
        const movieTitle = moviesObj[reservedMovie].ruTitle;
        const formatedDate = formatDate(reservedDate.date);
        const sessionTitle = declOfNum(+reservedSession.substring(0, 2), ['час', 'часа', 'часов']);
        const placesString = reservedPlaces.reverse()
            .reduce((acc, item) => acc += ` ряд ${item[0]} место ${item[1]},`, '')
            .slice(0, -1);

        setTitles({
            ticketCount,
            ticketCountTitle,
            movieTitle,
            formatedDate,
            reservedSession,
            sessionTitle,
            reservedCinema,
            placesString
        });
    }, [setTitles, moviesObj]);

    useEffect(() => {
        if (reserved) {
            titlesPreparation(reserved);
        }
    }, [reserved, titlesPreparation]);

    return (
        <Container>
            {titles ?
            <>
                <Title>Ваш заказ:</Title>
                <Text>{titles.ticketCount} {titles.ticketCountTitle}</Text>
                <Text>На фильм "{titles.movieTitle}"</Text>
                <Text>{titles.formatedDate}, сеанс в {titles.reservedSession} {titles.sessionTitle}</Text>
                <Text>Кинотеатр: {titles.reservedCinema}</Text>
                <Text>Вы бронируете: {titles.placesString}</Text>
                <Text>Сумма к оплате: {localTotal}</Text>
            </> :
            <>
                <Title>
                    Похоже, что вы ничего не забронировали или перезагрузили эту страницу.
                </Title>
                <Title>
                    Вернитесь &#9658; <BackLink to="/movies">к выбору фильма</BackLink>
                </Title>
            </>
            }
        </Container>
    );
}
export default PayPage;