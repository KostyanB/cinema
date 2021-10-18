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
        reserved: {
            clearReserved,
            reserved
        },
    } = useContext(Context);

    // выбор сеанса
    const handleSelectedSession = value => {
        setActiveSession(value);
        (reserved) && clearReserved();
    };

    const sessionsArr = activeMovieSessions && Object.keys(activeMovieSessions);

    //ставим активный сеанс от наличия резерва
    useEffect(() => {
        if (sessionsArr) {
            if (reserved) {
                setActiveSession(reserved.resSession);
            } else if (!sessionsArr.includes(activeSession)) {
                setActiveSession(sessionsArr[0]);
            }
        }
    }, [setActiveSession, reserved, activeSession, sessionsArr]);

    //********************************** */
    return (
        <Wrapper>
            <Label>Время</Label>
            <SessionWrap>
            {activeMovieSessions &&
                <Selector items={sessionsArr}
                    handleSelectParam={handleSelectedSession}
                    activeSelector={activeSession}
                    name="session"
                />
            }
            </SessionWrap>
        </Wrapper>
    )
};
export default SessionBlock;