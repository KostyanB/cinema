import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import getDateArr from '../Functions/getDateArr';
import Label from './Label';
import DatesItem from './DatesItem';

const Wrapper = styled.div`
    width: 420px;

    @media (max-width: 1240px) {
        flex-basis: 80%;
        margin-bottom: 40px;
    }

    @media (max-width: 576px) {
        flex-basis: 100%;
    }
`;
const Items = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    &:after {
        content: '';
        flex-grow: 1;
    }
`;

const DateBlock = () => {
    const dateArr = getDateArr(env.calendar.showPeriod);

    return (
        <Wrapper>
            <Label>Дата</Label>
            <Items>
                {dateArr.map((item, i) =>
                    <DatesItem key={i} dateParam={item}/>
                )}
            </Items>
        </Wrapper>
    )
}
export default DateBlock;