import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Functions/Context';
// components
import { useLocation } from 'react-router-dom';
import { Container } from '../Styled/Container';
//styled
const Title = styled.h2`
    font-size: ${env.fonts.mainFonts.subtitle.size};
    line-height: ${env.fonts.mainFonts.subtitle.line};
    margin-bottom: 15px;
`;

const SomePage = () => {
    const location = useLocation();

    const {
        calendar: { resetMovie }
    } = useContext(Context);

    useEffect(() => resetMovie(), [resetMovie]);

    return (
        <Container>
            <Title>{env.headNav[location.pathname.slice(1)]}</Title>
        </Container>
    );
}
export default SomePage;