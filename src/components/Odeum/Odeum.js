import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import screen from '../../img/screen.svg';
// import { Context } from '../Functions/Context';
// hooks
// components
import { Container } from '../Styled/Container';
import SeatBlock from './SeatBlock';
import Legend from './Legend';

const Wrapper = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 61px;
    padding: 50px 70px 64px;
    background: ${env.colors.auditorium};
    border-radius: 10px;
    overflow-x: auto;
    &::-webkit-scrollbar {
            height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${env.colors.free};
        border-radius: 100px;
    }

    @media (max-width: 1240px) {
        padding: 50px 10px 64px;
    }
`;
const Screen = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto 21px;
    border-top: 5px solid ${env.colors.scroll};
    border-radius: 3px;
    width: 1018px;

    img {
        width: 90%;
        height: auto;
        top: 3px;
    }
`;
// const SeatBlock = styled.div`
//     width: 1024px;
//     height: 226px;
//     margin: 0 auto;
//     padding-bottom: 50px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;

//     &:nth-of-type(3) {
//         border-bottom: ${env.colors.underline};
//     }

//     @media (max-width: 1240px) {
//         justify-content: center;
//     }
// `;
// const BigBlock = styled.div`
//     width: 910px;
//     height: 100%;
//     background: gray;
//     margin: 0 auto;
// `;
// const SmallBlock = styled.div`
//     width: 472px;
//     height: 100%;
//     background: gray;
//     margin: 0 auto;

//     @media (max-width: 1240px) {
//         &:first-of-type {
//             margin-right: 5px;
//         }
//     }
// `;




const Odeum = () => {

    return (
        <Wrapper>
            <Screen>
                <img src={screen} alt=""/>
            </Screen>
            <SeatBlock/>
            <Legend/>
        </Wrapper>
    );
}
export default Odeum;