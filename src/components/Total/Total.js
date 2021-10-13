import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Functions/Context';
// hooks
// components
import { Container } from '../Styled/Container';

const Wrapper = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 64px;
    padding-bottom: 158px;

    @media (max-width: 1024px) {

    }
`;
const SumTotal = styled.div`
    height: 94px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: ${env.fonts.totalFonts.label.size};
    line-height: ${env.fonts.totalFonts.label.line};
`;
const Sum = styled.div`
    font-size: ${env.fonts.totalFonts.sum.size};
    line-height: ${env.fonts.totalFonts.sum.line};
`;
const PayBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 52px;
    width: 254px;
    height: 69px;
    background: ${env.colors.orange};
    border: 1px solid ${env.colors.orange};
    border-radius: 5px;
    font-size: ${env.fonts.totalFonts.label.size};
    line-height: ${env.fonts.totalFonts.label.line};

    &:hover, :active {
        color: ${env.colors.orange};
    }

    &:hover {
        background: ${env.colors.mainText}
    }

    &:active {
        background: ${env.colors.rectangle}
    }
`;

const Total = ({total = 1600}) => {
    const {
        calendar: {
            activeMovie,
            activeDate,
            activeCinema,
            activeSession,
        },
        reserved: {
            reserved,
        }
    } = useContext(Context);

    console.log('reserved: ', reserved);
    const totalSum = reserved.length * env.ticketCost;

    const goPay = () =>{
        console.log('you need pay: ', total);
        console.log('activeSession: ', activeSession);
        console.log('activeMovie: ', activeMovie);
        console.log('activeCinema: ', activeCinema);
        console.log('activeDate: ', activeDate);
        const {  dayNum, monthName, year } = activeDate;
        const choiceDate = new Date( year, monthName, dayNum);
        console.log('choiceDate: ', choiceDate);
    };

    return (
        <Wrapper>
            <SumTotal>
                <span>Всего к оплате</span>
                <Sum>{totalSum} &#8381;</Sum>
            </SumTotal>
            <PayBtn onClick={goPay}>
                Перейти к оплате
            </PayBtn>
        </Wrapper>
    );
}
export default Total;