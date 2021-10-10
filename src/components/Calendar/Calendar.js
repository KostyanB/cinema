import React, { useEffect } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { CalendarContext } from '../Functions/Context';
// hooks
import { useOpenButton } from '../Hooks/calendarHooks/useOpenButton';
import { useOpenSelector } from '../Hooks/calendarHooks/useOpenSelector';
import { useAsync } from '../Hooks/useAsync';
import { useGetSessionsDb } from '../Hooks/useGetSessionsDb';

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
    border-bottom: 1px solid ${env.colors.rectangle};

    @media (max-width: 1024px) {
        grid-auto-flow: unset;
        grid-template-columns: max-content max-content;
        row-gap: 20px;
        justify-content: space-evenly;
    }
`;

//********************************************* */
const Calendar = () => {
    const openButton = useOpenButton();
    const openSelector = useOpenSelector();
    const getSessions = useGetSessionsDb();

    const asyncTask = async () => {
        getSessions.getSessionsDb();
    };

    const { execute } = useAsync({
        asyncFn: asyncTask
    });

    useEffect(() => execute(), []);

    return (
        <CalendarContext.Provider value={{
            openButton,
            openSelector,
            getSessions
        }}>
            <Wrapper>
                <DateBlock/>
                <CinemaBlock/>
                <SessionBlock/>
            </Wrapper>
        </CalendarContext.Provider>
    )
};
export default Calendar;