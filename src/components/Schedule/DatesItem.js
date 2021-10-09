import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const Item = styled.li`
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
`;
const Month = styled.span`
    font-size: ${env.fonts.calendarFonts.label.size};
    line-height: ${env.fonts.calendarFonts.label.line};
`;
const Day = styled.span`
    font-size: ${env.fonts.calendarFonts.date.size};
    line-height: ${env.fonts.calendarFonts.date.line};
`;
const WeekDay = styled.span`
    font-size: ${env.fonts.calendarFonts.day.size};
    line-height: ${env.fonts.calendarFonts.day.line};
`;

const DatesItem = ({ month, day, weekday }) => {
    const months = ['ЯНВ', 'ФЕВ', 'МАР', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ', 'АВГ', 'СЕН', 'ОКТ', 'НОЯ', 'ДЕК'];
    const weekdays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return (
        <Item>
            <Month>{months[month]}</Month>
            <Day>{day}</Day>
            <WeekDay>{weekdays[weekday]}</WeekDay>
        </Item>
    )
}
export default DatesItem;