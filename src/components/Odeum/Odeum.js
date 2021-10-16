import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import screen from '../../img/screen.svg';
// components
import { Container } from '../Styled/Container';
import SeatBlock from './SeatBlock';
import Legend from './Legend';
//env
const { auditorium, free, scroll } = env.colors;
// styled
const Wrapper = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 61px;
    padding: 50px 70px 64px;
    background: ${auditorium};
    border-radius: 10px;
    overflow-x: auto;
    &::-webkit-scrollbar {
            height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${free};
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
    border-top: 5px solid ${scroll};
    border-radius: 3px;
    width: 1018px;

    img {
        width: 90%;
        height: auto;
        top: 3px;
    }
`;

const Odeum = () => (
        <Wrapper>
            <Screen>
                <img src={screen} alt=""/>
            </Screen>
            <SeatBlock/>
            <Legend/>
        </Wrapper>
);
export default Odeum;