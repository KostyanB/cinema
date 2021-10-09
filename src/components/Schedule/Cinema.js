import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import Label from './Label';

const Wrapper = styled.div`

`;
const CinemaWrap = styled.div`
    height: 90px;
`;

const Cinema = () => (
    <Wrapper>
        <Label>Кинотеатр</Label>
        <CinemaWrap>

        </CinemaWrap>


    </Wrapper>
)
export default Cinema;