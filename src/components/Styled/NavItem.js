import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import env from '../../env.json';

const Item = styled.li`
    cursor: pointer;
    .active, :hover, :active {
        color: ${env.colors.orange};
    }
`;

const NavItem = ({ src, text }) => (
    <Item>
        <NavLink to={`/${src}`} activeClassName="active">
            {text}
        </NavLink>
    </Item>
)
export default NavItem;