import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import userImg from '../../img/user.jpg';

const Wrapper = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
        justify-self: center;
        -ms-grid-row: 1;
            grid-row: 1;
        -ms-grid-column: 2;
            -ms-grid-column-span: 1;
                grid-column: 2 / 3;
    }
`;
const UserName = styled.p`
    font-size: ${env.fonts.calendarFonts.month.size};
    line-height: ${env.fonts.calendarFonts.month.size};
`;
const Button = styled.button`
    background: url(${userImg});
    width: 33px;
    height: 33px;
    border-radius: 16.5px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;


const Auth = () => (
    <Wrapper>
        <UserName>Привет Мила!</UserName>
        <Button></Button>
    </Wrapper>
)
export default Auth;