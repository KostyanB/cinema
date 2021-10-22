import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
// components
import NavItem from './NavItem';
import { MenuIcon } from '../Styled/Icons/Icons';

//styled
const { hoverColor, groundColor, mainColor } = env.colors;
const Wrapper = styled.nav`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    margin-left: 57px;
    @media (max-width: 768px) {
        margin-left: 30px;
    }
`;
const Nav = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;

    @media (max-width: 768px) {
        position: absolute;
        top: 40px;
        flex-direction: column;
        align-items: baseline;
        gap: 10px;
        background-color: ${groundColor};
        padding: 20px;
        border-radius: 5px;
        z-index: 101;
        visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
        transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
        opacity: ${props => props.isOpen ? 1 : 0};
        transition: opacity 0.3s;
    }
`;
const MenuBtn = styled.button`
    display: none;
    width: 30px;
    height: 30px;
    color: ${mainColor};

    &:hover , :active {
        color: ${hoverColor};
    }

    @media (max-width: 768px) {
        display: block;
    }
`;
/******************************* */
const NavBar = () =>{
    const navArr = Object.entries(env.headNav);
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // клик вне компонента
    const rootEl = useRef(null);
    useEffect(() => {
        const onClick = e => {
            // true, если мимо селектора
            (!rootEl.current?.contains(e.target)
                && !e.target.closest('.selector'))
                    && setIsOpen(false);
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [rootEl, setIsOpen]);

    return (
        <Wrapper  ref={rootEl}>
            <MenuBtn onClick={toggleMenu}>
                <MenuIcon width={30} height={25.5}/>
            </MenuBtn>
            <Nav isOpen={isOpen}>
                {navArr.map((item, key) => (
                    <NavItem key={key}
                        src={item[0]}
                        text={item[1]}
                        toggleMenu={toggleMenu}
                    />
                ))}
            </Nav>
        </Wrapper>
    );
}
export default NavBar;