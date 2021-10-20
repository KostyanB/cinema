import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import env from '../../env.json';
import { Context } from '../Context';
import { Container } from '../Styled/Container';

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
const SumTitle = styled.div`
    height: 94px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: ${props => props.fonts.titleSize};
    line-height: ${props => props.fonts.titleLine};
    @media (max-width: 440px) {
        align-items: center;
    }
`;
const Sum = styled.div`
    font-size: ${props => props.fonts.sumSize};
    line-height: ${props => props.fonts.sumLine};
`;
const PayBtn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 254px;
    height: 69px;
    background: ${props => (props.disable === 'true') ?
        props.colors.disableColor :
            props.colors.hoverColor
        };
    border: 1px solid ${props => props.colors.hoverColor};
    border-radius: 5px;
    font-size: ${props => props.fonts.titleSize};
    line-height: ${props => props.fonts.titleLine};
    pointer-events: ${props => (props.disable === 'true') ? 'none' : 'auto'};

    &:hover, :active {
        color: ${props => props.colors.hoverColor};
    }

    &:hover {
        background: ${props => props.colors.mainColor};
    }

    &:active {
        background: ${props => props.colors.activeColor};
    }
`;

const Total = () => {
    const [ disable, setDisable ] = useState(true);
    const {
        disable: disableColor,
        rectangle: activeColor,
        orange: hoverColor,
        mainText: mainColor
    } = env.colors;
    const {
        label: {
            size: titleSize,
            line: titleLine
        },
        sum: {
            size: sumSize,
            line: sumLine
        }
    } = env.fonts.totalFonts;

    const {
        reserved: {
            localTotal,
            reserved
        },
    } = useContext(Context);

    // вкл кнопку если все выбраны
    useEffect(() => {
        if (reserved) {
            const { resPlaces, ...resParams } = reserved;
            const checkArr = [ ...Object.values(resParams), resPlaces.length ];
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
            <SumTitle fonts={{ titleSize, titleLine }}>
                <span>Всего к оплате</span>
                <Sum fonts={{ sumSize, sumLine }}>
                    {localTotal}
                </Sum>
            </SumTitle>
            <PayBtn disable={`${disable}`}
                to={'/paypage'}
                onKeyDown={checkEnterKey}
                colors={{ disableColor, activeColor, hoverColor, mainColor }}
                fonts={{ titleSize, titleLine }}
            >
                Перейти к оплате
            </PayBtn>
        </Wrapper>
    );
}
export default Total;