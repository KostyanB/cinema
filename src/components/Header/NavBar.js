import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
// components
import NavItem from './NavItem';
import { MenuIcon } from '../Styled/Icons/Icons';
//styled
const Wrapper = styled.nav`
    position: relative;
    display: -ms-flexbox;
    display: flex;
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
        background-color: ${props => props.color};
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
    color: ${props => props.colors.main};

    &:hover , :active {
        color: ${props => props.colors.hover};
    }

    @media (max-width: 768px) {
        display: block;
    }
`;

const NavBar = () =>{
    const { orange: hover, brown, mainText: main } = env.colors;
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
            <MenuBtn onClick={toggleMenu} colors={{hover, main}}>
                <MenuIcon width={30} height={25.5}/>
            </MenuBtn>
            <Nav isOpen={isOpen} color={brown}>
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