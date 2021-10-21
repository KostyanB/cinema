import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../Styled/Icons/Icons';

// styled
const LogoLink = styled(Link)`
    -ms-grid-column: 1;
        -ms-grid-column-span: 1;
            grid-column: 1 / 2;

    @media (max-width: 768px) {
        justify-self: center;
        -ms-grid-row: 1;
            grid-row: 1;
    }

    &:hover {
        color: ${env.colors.hoverColor};
    }
`;

const MainLink = () => (
    <LogoLink to="/">
        <LogoIcon width={30} height={30}/>
    </LogoLink>
)
export default MainLink;