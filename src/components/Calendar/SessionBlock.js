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
        calendar: {
            activeSession,
            setActiveSession,
            activeMovieDb
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

    useEffect(() => activeMovieDb && setActiveSession(Object.keys(activeMovieDb)[0]), [activeMovieDb]);

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
            {activeMovieDb &&
                <Selector items={Object.keys(activeMovieDb)}
                    handleSelector={handleSelectedSession}
                    handleBtn={handleSessionSelectors}
                    isOpen={openSelectorSession}
                    title={activeSession}
                    handleOutsideClick={handleOutsideClick}
                />
            }
            </SessionWrap>
        </Wrapper>
    )
};
export default SessionBlock;