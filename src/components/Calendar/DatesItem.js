import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const Item = styled.li`
    align-self: left;
    width: 90px;
    height: 90px;
    border: 1px solid ${props => props.color.rectangle};
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 9px;
    padding-top: 9px;
    transition: background-color 0.2s;
    cursor: pointer;
    margin-bottom: 15px;
    &:not(:last-of-type) {
        margin-right: 15px;
    }

    &:hover, :active {
        background-color: ${props => props.color.orange};
        color: ${props => props.color.brown};
    }
`;
const Month = styled.span`
    font-size: ${props => props.size};
    line-height: ${props => props.line};
`;
const Day = styled.span`
    font-size: ${props => props.size};
    line-height: ${props => props.line};
    font-weight: 900;
`;
const WeekDay = styled.span`
    font-size: ${props => props.size};
    line-height: ${props => props.line};
`;

const DatesItem = ({ param, activeItem, handleSelectedItem }) => {
    const { monthName, dayName, dayNum } = param;
    const { orange, brown, rectangle } = env.colors;
    const { label: monthFont, date: dateFont, day: dayFont } = env.fonts.calendarFonts;

    const activeStyle = (dayNum === activeItem?.dayNum) ? {
        backgroundColor: orange,
        color: brown
    } : {};

    return (
        <Item style={activeStyle}
            onClick={() => handleSelectedItem(param)}
            color={{orange, brown, rectangle}}>
            <Month size={monthFont.size} line={monthFont.line}>{monthName}</Month>
            <Day size={dateFont.size} line={dateFont.line}>{dayNum}</Day>
            <WeekDay size={dayFont.size} line={dayFont.line}>{dayName}</WeekDay>
        </Item>
    )
}
export default DatesItem;