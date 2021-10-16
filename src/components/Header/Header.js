import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Context';
// components
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
    display: -ms-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    height: max-content;
    padding-top: 30px;
    padding-bottom: 30px;
`;
const BackImage = styled.div`
    width: 100vw;
    height: 814px;
    background: ${props => props.img};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const Header = () => {
    const {
        backgroundImg: { backgroundImg, setBackgroundImg },
        calendar: { activeMovie }
    } = useContext(Context);
    const { gradient, brown } = env.colors;

    useEffect(() => {
        activeMovie || setBackgroundImg('bg.jpg');
    }, [activeMovie, setBackgroundImg]);

    const pageBackground = `
        linear-gradient(180deg, ${gradient} 0%, ${brown} 85.62%),
        url(../../db/moviesImg/${backgroundImg}) no-repeat center top / cover;
    `;

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