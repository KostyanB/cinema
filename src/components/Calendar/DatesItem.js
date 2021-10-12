import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Functions/Context';

const Item = styled.li`
    align-self: left;
    width: 90px;
    height: 90px;
    border: 1px solid ${env.colors.rectangle};
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

    &:hover, :active {
        background-color: ${env.colors.orange};
        color: ${env.colors.brown};
    }

    /* &:not(:last-of-type) { */
        margin-right: 15px;
        margin-bottom: 15px
    /* } */

    /* &:after {
        content: '';
        flex-grow: 1;
    } */

    /* @media (max-width: 440px) {
        :not(:last-of-type) {
            margin-right: 5px;
        }
    } */
`;
const Month = styled.span`
    font-size: ${env.fonts.calendarFonts.label.size};
    line-height: ${env.fonts.calendarFonts.label.line};
`;
const Day = styled.span`
    font-size: ${env.fonts.calendarFonts.date.size};
    line-height: ${env.fonts.calendarFonts.date.line};
    font-weight: 900;
`;
const WeekDay = styled.span`
    font-size: ${env.fonts.calendarFonts.day.size};
    line-height: ${env.fonts.calendarFonts.day.line};
`;

const DatesItem = ({ dateParam }) => {
    const { monthName, dayName, dayNum } = dateParam;

    const {
        calendar: { activeDate, setActiveDate },
    } = useContext(Context);

    const activeStyle = (dayNum === activeDate?.dayNum) ? {
        backgroundColor: env.colors.orange,
        color: env.colors.brown
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