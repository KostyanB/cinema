import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const {
    colors: { hoverColor, groundColor, borderColor },
    fonts: {
        calendarFonts: { label: month, date, day }
    }
} = env;
// styled
const Item = styled.li`
    align-self: left;
    width: 90px;
    height: 90px;
    border: 1px solid ${borderColor};
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
        background-color: ${hoverColor};
        color: ${groundColor};
    }
`;
const Month = styled.span`
    font-size: ${month.size};
    line-height: ${month.line};
`;
const Day = styled.span`
    font-size: ${date.size};
    line-height: ${date.line};
    font-weight: 900;
`;
const WeekDay = styled.span`
    font-size: ${day.size};
    line-height: ${day.line};
`;
//******************************
const DatesItem = ({ param, activeItem, handleSelectedItem }) => {
    const { monthName, dayName, dayNum } = param;

    const activeStyle = (dayNum === activeItem?.dayNum) ? {
        backgroundColor: hoverColor,
        color: groundColor
    } : {};

    return (
        <Item style={activeStyle}
            onClick={() => handleSelectedItem(param)}
        >
            <Month>{monthName}</Month>
            <Day>{dayNum}</Day>
            <WeekDay>{dayName}</WeekDay>
        </Item>
    )
}
export default DatesItem;