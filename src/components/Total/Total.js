import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import env from '../../env.json';
import { Context } from '../Context';
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
            localTotal,
            reserved
        },
    } = useContext(Context);

    // вкл кнопку если все выбраны
    useEffect(() => {
        if (reserved) {
            const { resDate, resMovie, resCinema, resSession, resPlaces } = reserved;
            const checkArr = [resDate, resMovie, resCinema, resSession, resPlaces.length];
            checkArr.every(item => item) && setDisable(false);
            checkArr.some(item => !item) && setDisable(true);
        } else {
            setDisable(true);
        }
    }, [reserved]);

    // откл кнопки по Enter при disable
    const checkEnterKey = e => ((e.keyCode === 13) && disable) && e.preventDefault();

    //**************************** */
    return (
        <Wrapper>
            <SumTotal>
                <span>Всего к оплате</span>
                <Sum>{localTotal}</Sum>
            </SumTotal>
            <PayBtn disable={`${disable}`} to={'/paypage'} onKeyDown={checkEnterKey}>
                Перейти к оплате
            </PayBtn>
        </Wrapper>
    );
}
export default Total;