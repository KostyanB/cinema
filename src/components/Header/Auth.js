import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import userImg from '../../img/user.jpg';
// styled
const Wrapper = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 11px;

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
    font-size: ${props => props.size};
    line-height: ${props => props.line};
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

const Auth = () => {
    const { size, line } = env.fonts.calendarFonts.label;

    return (
        <Wrapper>
            <UserName size={size} line={line}>Привет Друг!</UserName>
            <Button></Button>
        </Wrapper>
    );
}
export default Auth;