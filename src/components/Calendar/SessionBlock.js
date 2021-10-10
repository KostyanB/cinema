import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context, CalendarContext } from '../Functions/Context';
import Label from './Label';
import Selector from '../Selector';

// styled
const Wrapper = styled.div`
    padding-left: clamp(10px ,3vw, 30px);

    @media (max-width: 1140px) {
        padding-left: 0px;
    }
    @media (max-width: 1024px) {
        grid-row: 2;
    }
`;
const SessionWrap = styled.div`
    height: 90px;
    display: flex;
    align-items: center;
    position: relative;
    width: 108px;
`;
//************************************** */
const SessionBlock = () => {
    const {
        openSelector: {
            openSessionSelector,
            setOpenSessionSelector,
            toggleSessionSelector,
            setOpenCinemaSelector
        },
        openButton: {
            openBtnSession,
            setOpenBtnSession,toggleBtnSession,
            setOpenBtnCinema
        },
        getSessions: { sessionsDb }
    } = useContext(CalendarContext);

    const {
        calendar: { activeMovie, activeSession, setActiveSession },
    } = useContext(Context);

    const sessions = sessionsDb && sessionsDb[activeMovie];

    useEffect(() => sessions && setActiveSession(sessions[0]), [sessions, setActiveSession]);

    const handleSessionSelector = value => {
        setOpenSessionSelector(false);
        setOpenBtnSession(false);
        setActiveSession(value);
    };

    const handleSessionBtn = () => {
        toggleSessionSelector();
        setOpenCinemaSelector(false);
        toggleBtnSession();
        setOpenBtnCinema(false);
    };

    return (
        <Wrapper>
            <Label>Время</Label>
            <SessionWrap>
                <Selector items={sessions}
                    handleSelector={handleSessionSelector}
                    handleBtn={handleSessionBtn}
                    openBtn={openBtnSession}
                    openSelector={openSessionSelector}
                    title={activeSession}
                />
            </SessionWrap>
        </Wrapper>
    )
};
export default SessionBlock;