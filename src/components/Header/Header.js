import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
// components
import { Context } from '../Functions/Context';
import { Container } from '../Styled/Container';
import MainLink from './MainLink';
import NavBar from './NavBar';
import Auth from './Auth';
// styled
const HeaderStyle = styled.header`
    height: fit-content;
    width: 100vw;
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
    padding-bottom: 30px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 10px;
    }
`;
const BackImage = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.img};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const Header = () => {
    const {
        backgroundImg: { backgroundImg }
    } = useContext(Context);

    const pageBackground = backgroundImg ? `
        linear-gradient(180deg, ${env.colors.gradient} 0%, ${env.colors.brown} 85.62%),
        url(../../db/moviesImg/${backgroundImg}) no-repeat center top / cover;
        ` :
        `none`;

    return (
        <HeaderStyle>
            <Wrapper>
                <MainLink/>
                <NavBar/>
                <Auth/>
            </Wrapper>
            <BackImage img={pageBackground}/>
        </HeaderStyle>
    );
}
export default Header;