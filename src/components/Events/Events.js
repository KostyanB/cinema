import React from 'react';
// import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import env from '../../env.json';
import { Container } from '../Styled/Container';

const Events = () => {
    const location = useLocation()

    return (
        <Container>
            <h2>{env.headNav[location.pathname.slice(1)]}</h2>
        </Container>
    );
}
export default Events;