import React, { useEffect, useContext } from 'react';
// import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Functions/Context';
// components
import { useLocation } from 'react-router-dom';
import { Container } from '../Styled/Container';

const SomePage = () => {
    const location = useLocation();

    const {
        calendar: { resetMovie }
    } = useContext(Context);

    useEffect(() => resetMovie(), [resetMovie]);

    return (
        <Container>
            <h2>{env.headNav[location.pathname.slice(1)]}</h2>
        </Container>
    );
}
export default SomePage;