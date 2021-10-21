import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Context';
import { Container } from '../Styled/Container';

const { size, line } = env.fonts.mainFonts.subtitle;
//styled
const Title = styled.h2`
    font-size: ${size};
    line-height: ${line};
    margin-bottom: 15px;
`;
//*********************************
const SomePage = () => {
    const location = useLocation();

    const {
        calendar: { resetMovie }
    } = useContext(Context);

    useEffect(() => resetMovie(), [resetMovie]);

    return (
        <Container>
            <Title>
                {env.headNav[location.pathname.slice(1)]}
            </Title>
        </Container>
    );
}
export default SomePage;