import React from 'react';
import styled from 'styled-components';
import env from '../../../env.json';

const {
    selectorFill,
    borderColor,
    hoverColor,
    mainColor
} = env.colors;
//styled
const Button = styled.button`
    position: relative;
    padding: 8px 20px 8px 18px;
    text-align: left;
    background-color: ${selectorFill};
    width: 100%;
    height: 60px;
    border: 1px solid ${borderColor};
    border-radius: 5px;
    &:after {
        content: '';
        position: absolute;
        right: 14px;
        top: 50%;
        height: 14px;
        width: 14px;
        margin-top: -4px;
        -webkit-transform: translateY(-50%) rotate(-45deg);
            -ms-transform: translateY(-50%) rotate(-45deg);
                transform: translateY(-50%) rotate(-45deg);
        border-style: solid;
        border-color: transparent transparent ${mainColor} ${mainColor};
        border-width: 1px;
        z-index: 1;
        -webkit-transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
        -o-transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
        transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
    }
    &:hover {
        color: ${hoverColor};
        cursor: pointer;
    }

    ${props => props.openStyle};
`;

const SelectButton = ({ isOpen, title, toggleSelector }) => {
    const openBtnStyle = `
        border-bottom-color: ${hoverColor};
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        &:after {
            margin-top: 6px;
            border-color: ${hoverColor} ${hoverColor} transparent transparent;
        }
    `;

    return (
        <Button openStyle={isOpen && openBtnStyle}
            onClick={toggleSelector}
        >
            {title}
        </Button>
    )
};
export default SelectButton;