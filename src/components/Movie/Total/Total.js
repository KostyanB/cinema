import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import env from '../../../env.json';
import { Context } from '../../Context';
import Container from '../../Styled/Container';

const {
    colors: {
        disableColor,
        borderColor: activeColor,
        hoverColor,
        mainColor
    },
    fonts: {
        totalFonts: {
            label: {
                size: titleSize,
                line: titleLine
            },
            sum: {
                size: sumSize,
                line: sumLine
            }
        }
    }
} = env;

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
    font-size: ${titleSize};
    line-height: ${titleLine};
    @media (max-width: 440px) {
        align-items: center;
    }
`;
const Sum = styled.div`
    font-size: ${sumSize};
    line-height: ${sumLine};
`;
const PayBtn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 254px;
    height: 69px;
    background: ${props => (props.disable === 'true') ? disableColor : hoverColor};
    border: 1px solid ${hoverColor};
    border-radius: 5px;
    font-size: ${titleSize};
    line-height: ${titleLine};
    pointer-events: ${props => (props.disable === 'true') ? 'none' : 'auto'};

    &:hover, :active {
        color: ${hoverColor};
    }

    &:hover {
        background: ${mainColor};
    }

    &:active {
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
            const { reservedPlaces, ...resParams } = reserved;
            const checkArr = [ reservedPlaces.length, ...Object.values(resParams) ];
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
            <SumTitle>
                <span>Всего к оплате</span>
                <Sum>
                    {localTotal}
                </Sum>
            </SumTitle>
            <PayBtn disable={`${disable}`}
                to={'/paypage'}
                onKeyDown={checkEnterKey}
            >
                Перейти к оплате
            </PayBtn>
        </Wrapper>
    );
}
export default Total;