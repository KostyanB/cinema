import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

//styled
const Button = styled.button`
    position: relative;
    padding: 8px 24px;
    text-align: left;
    background-color: ${props => props.colors.background};
    width: 100%;
    height: 60px;
    border: 1px solid ${props => props.colors.border};
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
        border-color: transparent transparent ${props => props.colors.white} ${props => props.colors.white};
        border-width: 1px;
        z-index: 1;
        -webkit-transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
        -o-transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
        transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
    }
    &:hover {
        color: ${props => props.colors.orange};
        cursor: pointer;
    }

    ${props => props.openStyle};
`;

const SelectButton = ({ isOpen, title, toggleSelector }) => {
    const {
        selectorFill: background,
        rectangle: border,
        orange,
        mainText: white
    } = env.colors;

    const openBtnStyle = `
        border-bottom-color: ${orange};
        border-bottom-left-radius: 0;props => props.colors.
        border-bottom-right-radius: 0;
        &:after {
            margin-top: 6px;
            border-color: ${orange} ${orange} transparent transparent;
        }
    `;

    return (
        <Button openStyle={isOpen && openBtnStyle}
            colors={{background, border, orange, white}}
            onClick={toggleSelector}
        >
            {title}
        </Button>
    )
};
export default SelectButton;