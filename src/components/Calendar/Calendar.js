import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Functions/Context';
// components
import { Container } from '../Styled/Container';
import DateBlock from './DateBlock';
import CinemaBlock from './CinemaBlock';
import SessionBlock from './SessionBlock';
// styled
const Wrapper = styled(Container)`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 49px;
    padding-bottom: 64px;
    border-bottom: ${env.colors.underline};

    @media (max-width: 1240px) {
        grid-auto-flow: unset;
        grid-template-columns: max-content max-content;
        row-gap: 20px;
        justify-content: space-evenly;
    }
`;

//********************************************* */
const Calendar = () => {
    const {
        selectors: {
            closeAllSelectors,
            outsideCinema,
            outsideSession
        }
    } = useContext(Context)

    // закрытие селекторов по клику мимо них
    useEffect(() => (outsideCinema && outsideSession) && closeAllSelectors(),
        [outsideCinema, outsideSession, closeAllSelectors]);

    return (
        <Wrapper>
            <DateBlock/>
            <CinemaBlock/>
            <SessionBlock/>
        </Wrapper>
    )
};
export default Calendar;