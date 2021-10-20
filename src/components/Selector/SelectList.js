import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';


const List = styled.ul`
    display: block;
    position: absolute;
    max-height: 79px;
    overflow: auto;
    width: 100%;
    z-index: 10;
    background: ${props => props.colors.background};
    border: 1px solid ${props => props.colors.border};
    border-top: none;
    padding: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 8px 18px;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.colors.hover};
        border-radius: 100px;
    }
    `;
const Li = styled.li`
    cursor: pointer;

    &:not(:last-of-type) {
        padding-bottom: 8px;
    }

    &:hover {
        color: ${props => props.color};
    }
    `;

const SelectList = ({ items, handleSelection }) => {
    const {
        selectorFill: background,
        orange: hover,
        rectangle: border
    } = env.colors;

    return (
        <List className="selector"
            colors={{background, hover, border}}
        >
            {items.map((item, i) =>
                <Li key={i}
                    id={item}
                    onClick={() => handleSelection(item)}
                    color={hover}
                >{item}</Li>
            )}
        </List>
    );
}
export default SelectList;