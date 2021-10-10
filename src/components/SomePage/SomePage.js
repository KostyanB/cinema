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
        backgroundImg: { setBackgroundImg }
    } = useContext(Context);

    useEffect(() => setBackgroundImg(null), [setBackgroundImg]);


    return (
        <Container>
            <h2>{env.headNav[location.pathname.slice(1)]}</h2>
        </Container>
    );
}
export default SomePage;