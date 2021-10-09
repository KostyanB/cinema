import React from 'react';
import styled from 'styled-components';
// components
import { Container } from '../Styled/Container';
import MainLink from './MainLink';
import NavBar from './NavBar';
import Auth from './Auth';
// styled
const HeaderStyle = styled.section`
    height: fit-content;
    width: 100vw;
    padding-bottom: 15px;
`;
const Wrapper = styled(Container)`
    position: relative;
    display: -ms-grid;
    display: grid;
    -webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    grid-template-columns: 30px 1fr max-content;
    height: max-content;
    padding-top: 30px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 10px;
    }
`;

const Header = () => (
    <HeaderStyle>
        <Wrapper>
            <MainLink/>
            <NavBar/>
            <Auth/>
        </Wrapper>
    </HeaderStyle>
)
export default Header;