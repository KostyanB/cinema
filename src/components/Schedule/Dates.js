import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import Label from './Label';
import DatesItem from './DatesItem';

const Wrapper = styled.div`

`;
const Items = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

`;

const Dates = () => {
    const today = new Date();
    const dayNow = today.getDate();
    const weekDayNow = today.getDay();
    const monthNow = today.getMonth();


    return (
        <Wrapper>
            <Label>Дата</Label>
            <Items>
                <DatesItem month={monthNow} day={dayNow} weekday={weekDayNow}/>
                <DatesItem month={monthNow} day={28} weekday={6}/>
                <DatesItem month={monthNow} day={29} weekday={0}/>
                <DatesItem month={monthNow} day={30} weekday={1}/>
            </Items>

        </Wrapper>
    )
}
export default Dates;