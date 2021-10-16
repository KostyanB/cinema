import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { SelectorsContext } from '../Context';
// components
import { Container } from '../Styled/Container';
import DateBlock from './DateBlock';
import CinemaBlock from './CinemaBlock';
import SessionBlock from './SessionBlock';
// styled
const Wrapper = styled(Container)`
    padding-top: 49px;
    padding-bottom: 64px;
    border-bottom: ${env.colors.underline};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 1240px) {
        flex-wrap: wrap;
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
    } = useContext(SelectorsContext);

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