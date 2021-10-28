import React from 'react';
import styled from 'styled-components';
import env from '../../../env.json';

const {
    selectorFill,
    hoverColor,
    borderColor
} = env.colors;

// styled
const List = styled.ul`
    display: block;
    position: absolute;
    max-height: 79px;
    overflow: auto;
    width: 100%;
    z-index: 10;
    background: ${selectorFill};
    border: 1px solid ${borderColor};
    border-top: none;
    padding: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 8px 18px;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${hoverColor};
        border-radius: 100px;
    }
`;
const Li = styled.li`
    cursor: pointer;

    &:not(:last-of-type) {
        padding-bottom: 8px;
    }

    &:hover {
        color: ${hoverColor};
    }
`;

const SelectList = ({ items, handleSelection }) => (
    <List className="selector">
        {items.map((item, i) =>
            <Li key={i}
                id={item}
                onClick={() => handleSelection(item)}
            >
                {item}
            </Li>
        )}
    </List>
)
export default SelectList;