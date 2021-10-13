import React, { useEffect, useContext } from 'react';
// import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Functions/Context';
// components
import { Container } from '../Styled/Container';

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

    const formatDate = () => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
        };
        const str = activeDate.date.toLocaleString("ru", options);
        const formattedStr = str.charAt(0).toUpperCase() + str.substr(1);
        return formattedStr;
    };

    const formatPlaces = () => reserved.reverse()
        .reduce((acc, item) => acc += ` ряд ${item[0]} место ${item[1]},`, '')
        .slice(0, -1);

    return (
        <Container>
            <h2>Ваш заказ:</h2>
            <p>{reserved.length} билета</p>
            <p>На фильм "{moviesObj[activeMovie].ruTitle}"</p>
            <p>{formatDate()}, сеанс в {activeSession}</p>
            <p>Кинотеатр: {activeCinema}</p>
            <p>Вы бронируете: {formatPlaces()}</p>
            <p>Сумма к оплате: {total} &#8381;</p>
        </Container>
    );
}
export default SomePage;