import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Container } from '../Styled/Container';
import Dates from './Dates';
import Cinema from './Cinema';
import Session from './Session';

const Wrapper = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 49px;
    padding-bottom: 64px;
    border-bottom: 1px solid ${env.colors.rectangle};
`;


const Schedule = () => (
    <Wrapper>
        <Dates/>
        <Cinema/>
        <Session/>
    </Wrapper>
)
export default Schedule;