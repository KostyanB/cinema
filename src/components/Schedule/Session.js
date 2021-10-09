import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import Label from './Label';

const Wrapper = styled.div`

`;
const SessionWrap = styled.div`
    height: 90px;
`;

const Session = () => (
    <Wrapper>
        <Label>Время</Label>
        <SessionWrap>

        </SessionWrap>


    </Wrapper>
)
export default Session;