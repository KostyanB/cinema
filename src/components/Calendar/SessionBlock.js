import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';
import Label from './Label';
import Selector from '../Selector';

// styled
const Wrapper = styled.div`
    padding-left: clamp(10px ,3vw, 30px);

    @media (max-width: 1240px) {
        padding-left: 0px;
        order: 2;
    }
    @media (max-width: 576px) {
        order: unset;
    }
    @media (max-width: 440px) {
        margin-top: 40px;
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
            activeMovieSessions
        },
    } = useContext(Context);

    // выбор сеанса
    const handleSelectedSession = value => {
        setActiveSession(value);
    };
    useEffect(() => {
        activeMovieSessions && setActiveSession(Object.keys(activeMovieSessions)[0]);
    }, [activeMovieSessions, setActiveSession]);
    return (
        <Wrapper>
            <Label>Время</Label>
            <SessionWrap>
            {activeMovieSessions &&
                <Selector items={Object.keys(activeMovieSessions)}
                    handleSelectParam={handleSelectedSession}
                    title={activeSession}
                    name="session"
                />
            }
            </SessionWrap>
        </Wrapper>
    )
};
export default SessionBlock;