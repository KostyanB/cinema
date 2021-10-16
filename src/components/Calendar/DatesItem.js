import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Context';

const { orange, brown, rectangle } = env.colors;
const { label: labelFont, date: dateFont, day: dayFont } = env.fonts.calendarFonts;

const Item = styled.li`
    align-self: left;
    width: 90px;
    height: 90px;
    border: 1px solid ${rectangle};
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
        background-color: ${orange};
        color: ${brown};
    }
`;
const Month = styled.span`
    font-size: ${labelFont.size};
    line-height: ${labelFont.line};
`;
const Day = styled.span`
    font-size: ${dateFont.size};
    line-height: ${dateFont.line};
    font-weight: 900;
`;
const WeekDay = styled.span`
    font-size: ${dayFont.size};
    line-height: ${dayFont.line};
`;

const DatesItem = ({ dateParam }) => {
    const { monthName, dayName, dayNum } = dateParam;

    const {
        calendar: { activeDate, setActiveDate },
    } = useContext(Context);

    const activeStyle = (dayNum === activeDate?.dayNum) ? {
        backgroundColor: orange,
        color: brown
    } : {};

    const hanleActiveDay = () => {
        setActiveDate(dateParam);
    };

    return (
        <Item style={activeStyle} onClick={hanleActiveDay}>
            <Month>{monthName}</Month>
            <Day>{dayNum}</Day>
            <WeekDay>{dayName}</WeekDay>
        </Item>
    )
}
export default DatesItem;