import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import env from '../../env.json';
import { Context } from '../Functions/Context';
// hooks
// components
import { Container } from '../Styled/Container';
//colors
const {
    disable: disableColor,
    rectangle: activeColor,
    orange: hoverColor,
    mainText: mainColor
} = env.colors;

// styled
const Wrapper = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 64px;
    padding-bottom: 158px;

    @media (max-width: 440px) {
        flex-direction: column;
        gap: 10px;
        padding-top: 30px;
    }
`;
const SumTotal = styled.div`
    height: 94px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: ${env.fonts.totalFonts.label.size};
    line-height: ${env.fonts.totalFonts.label.line};
    @media (max-width: 440px) {
        align-items: center;
    }
`;
const Sum = styled.div`
    font-size: ${env.fonts.totalFonts.sum.size};
    line-height: ${env.fonts.totalFonts.sum.line};
`;
const PayBtn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 254px;
    height: 69px;
    background: ${props => (props.disable === 'true') ? disableColor : hoverColor};
    /* background: ${hoverColor}; */
    border: 1px solid ${hoverColor};
    border-radius: 5px;
    font-size: ${env.fonts.totalFonts.label.size};
    line-height: ${env.fonts.totalFonts.label.line};
    pointer-events: ${props => (props.disable === 'true') ? 'none' : 'auto'};

    &:hover, :active {
        /* color: ${props => (props.disable === 'true') ? mainColor : hoverColor}; */
        color: ${hoverColor};
    }

    &:hover {
        /* background: ${props => (props.disable === 'true') ? disableColor : mainColor}; */
        background: ${mainColor};
    }

    &:active {
        /* background: ${props => (props.disable === 'true') ? disableColor : activeColor}; */
        background: ${activeColor};
    }
`;

const Total = () => {
    const [ disable, setDisable ] = useState(true);
    const {
        reserved: {
            total,
            reserved
        },
        calendar: {
            activeDate,
            activeCinema,
            activeSession
        }
    } = useContext(Context);

    useEffect(() => {
        const checkArr = [activeDate, activeSession, activeCinema, reserved.length];
        checkArr.every(item => item) && setDisable(false);
        checkArr.some(item => !item) && setDisable(true);
    }, [
        activeDate,
        activeSession,
        activeCinema,
        reserved.length
    ]);

    return (
        <Wrapper>
            <SumTotal>
                <span>Всего к оплате</span>
                <Sum>{total} &#8381;</Sum>
            </SumTotal>
            <PayBtn disable={`${disable}`} to={'/paypage'}>
                Перейти к оплате
            </PayBtn>
        </Wrapper>
    );
}
export default Total;