import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const Button = styled.button`
    position: relative;
    padding: 8px 24px;
    text-align: left;
    background-color: ${env.colors.selectorFill};
    width: 100%;
    height: 60px;
    border: 1px solid ${env.colors.rectangle};
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
        border-color: transparent transparent ${env.colors.mainText} ${env.colors.mainText};
        border-width: 1px;
        z-index: 1;
        -webkit-transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
        -o-transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
        transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
    }
    &:hover {
        color: ${env.colors.orange};
        cursor: pointer;
    }

    ${(props) => props.isOpen};
`;

const SelectButton = ({ isOpen, title, handle }) => {
    const openBtnStyle = `
        border-bottom-color: ${env.colors.orange};
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        &:after {
            margin-top: 6px;
            border-color: ${env.colors.orange} ${env.colors.orange} transparent transparent;
        }
    `;

    return (
        <Button isOpen={isOpen && openBtnStyle} onClick={handle}>{title}</Button>
    )
};
export default SelectButton;