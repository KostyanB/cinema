import React from 'react';
import styled from 'styled-components';
import env from '../../../env.json';
import screen from '../../../img/screen.svg';
// components
import Container from '../../Styled/Container';
import SeatBlock from './SeatBlock';
import Legend from './Legend';

const {
    odeumColor,
    odeumScroll,
    screenColor,
} = env.colors;
// styled
const Wrapper = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 61px;
    padding-top: 40px;
    padding-left: 76px;
    padding-right: 67px;
    padding-bottom: 39px;
    background: ${odeumColor};
    border-radius: 10px;
    overflow-x: auto;

    &::-webkit-scrollbar {
            height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${odeumScroll};
        border-radius: 100px;
    }

    @media (max-width: 1240px) {
        padding: 50px 10px 38px;
    }
`;
const Screen = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto 21px;
    border-top: 10px solid ${screenColor};
    width: 1018px;

    img {
        width: 90%;
        height: auto;
        top: 3px;
    }
`;
//***************************
const Odeum = () => (
    <Wrapper>
        <Screen>
            <img src={screen} alt=""/>
        </Screen>
        <SeatBlock/>
        <Legend/>
    </Wrapper>
)
export default Odeum;