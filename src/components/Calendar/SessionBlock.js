import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';
import Label from './Label';
import Selector from '../Selector';

// styled
const Wrapper = styled.div`
    padding-left: clamp(10px ,3vw, 30px);

    @media (max-width: 1240px) {
        padding-left: 0px;
        grid-row: 2;
    }
    @media (max-width: 440px) {
        grid-row: 3;
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
        getSessions: { sessionsDb },
        calendar: {
            activeMovie,
            activeSession,
            setActiveSession
        },
        selectors: {
            openSelectorSession,
            closeCinema,
            closeSession,
            toggleSession,
            setOutsideSession,
            setInsideClick
        }
    } = useContext(Context);
    //список сеансов для фильма
    const sessions = sessionsDb && sessionsDb[activeMovie];

    useEffect(() => sessions && setActiveSession(sessions[0]), [sessions, setActiveSession]);
    // выбор сеанса
    const handleSelectedSession = value => {
        closeSession();
        setActiveSession(value);
        setInsideClick();
    };
    // управление открытием селектора
    const handleSessionSelectors = () => {
        toggleSession();
        closeCinema();
        setInsideClick();
    };
    // фиксация клика мимо селектора
    const handleOutsideClick = () => setOutsideSession(true);

    return (
        <Wrapper>
            <Label>Время</Label>
            <SessionWrap>
                <Selector items={sessions}
                    handleSelector={handleSelectedSession}
                    handleBtn={handleSessionSelectors}
                    isOpen={openSelectorSession}
                    title={activeSession}
                    handleOutsideClick={handleOutsideClick}
                />
            </SessionWrap>
        </Wrapper>
    )
};
export default SessionBlock;