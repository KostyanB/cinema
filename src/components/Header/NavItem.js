import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import env from '../../env.json';

const { size, line } = env.fonts.mainFonts.nav;
const Item = styled.li`
    cursor: pointer;
    font-size: ${size};
    line-height: ${line};
    font-weight: normal;

    .active, :hover, :active {
        color: ${env.colors.hoverColor};
    }
`;

const NavItem = ({ src, text, toggleMenu }) => (
    <Item>
        <NavLink to={`/${src}`}
            activeClassName="active"
            onClick={toggleMenu}
        >
            {text}
        </NavLink>
    </Item>
)
export default NavItem;