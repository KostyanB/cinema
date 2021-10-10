import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import SelectButton from './SelectButton';

const List = styled.ul`
    display: block;
    position: absolute;
    max-height: 79px;
    overflow: auto;
    width: 100%;
    z-index: 10;
    background: ${env.colors.selectorFill};
    border: 1px solid ${env.colors.rectangle};
    border-top: none;
    padding: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-left: 18px;
    padding-right: 18px;
    top: 75px;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${env.colors.orange};
        border-radius: 100px;
    }
`;
const Li = styled.li`
    padding: 8px;
    cursor: pointer;
    :hover {
        color: ${env.colors.orange};
    }
`;

const Selector = ({ items, openBtn, handleBtn, openSelector, handleSelector, title }) => (
        <>
            <SelectButton  isOpen={openBtn} handle={handleBtn} title={title}/>
            {openSelector &&
            <List>
                {items.map((item, i) => <Li key={i} id={item} onClick={() => handleSelector(item)}>{item}</Li>)}
            </List>
            }
        </>
    )
export default Selector;