import React from 'react';
import styled from 'styled-components';
import env from '../../../env.json';
// components
import Container from '../../Styled/Container';
import DateBlock from './DateBlock';
import CinemaBlock from './CinemaBlock';
import SessionBlock from './SessionBlock';

// styled
const Wrapper = styled(Container)`
    padding-top: 49px;
    padding-bottom: 64px;
    border-bottom: ${env.colors.underline};
    display: flex;
    align-items: flex-start;

    @media (max-width: 1240px) {
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

//***************************************
const Calendar = () => (
    <Wrapper>
        <DateBlock/>
        <CinemaBlock/>
        <SessionBlock/>
    </Wrapper>
)
export default Calendar;