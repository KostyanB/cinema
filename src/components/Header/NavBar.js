import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
// components
import NavItem from '../Styled/NavItem';

const Nav = styled.nav`
    justify-self: left;
    margin-left: 57px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;

    @media (max-width: 768px) {
        justify-self: auto;
        margin-left: 0px;
        -ms-grid-column: 1;
            -ms-grid-column-span: 2;
                grid-column: 1 / 3;
        justify-content: space-between;
        gap: clamp(1%, 25px, 20%);
    }

    @media (max-width: 576px) {
        flex-wrap: wrap;
        /* -ms-grid-column: 1;
        -ms-grid-column-span: 1;
            grid-column: 1 / 2; */
    }

    /* @media (max-width: 576px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
            grid-column: 1 / 3;
    } */
`;

const NavBar = () =>{
    const navArr = Object.entries(env.headNav);

    return (
        <Nav>
            {navArr.map((item, key) => (
                <NavItem key={key} src={item[0]} text={item[1]}/>
            ))}
        </Nav>
    );
}
export default NavBar;