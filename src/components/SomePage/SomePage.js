import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Context';
import { Container } from '../Styled/Container';

//styled
const Title = styled.h2`
    font-size: ${props => props.size};
    line-height: ${props => props.line};
    margin-bottom: 15px;
`;

const SomePage = () => {
    const { size, line } = env.fonts.mainFonts.subtitle;
    const location = useLocation();

    const {
        calendar: { resetMovie }
    } = useContext(Context);

    useEffect(() => resetMovie(), [resetMovie]);

    return (
        <Container>
            <Title size ={size} line={line}>
                {env.headNav[location.pathname.slice(1)]}
            </Title>
        </Container>
    );
}
export default SomePage;