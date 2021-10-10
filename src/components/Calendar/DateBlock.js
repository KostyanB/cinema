import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import getDateArr from '../Functions/getDateArr';
import Label from './Label';
import DatesItem from './DatesItem';

const Wrapper = styled.div`
    @media (max-width: 1024px) {
        grid-row: 1;
        grid-column: 1 / 3;
        justify-self: center;
    }

`;
const Items = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    max-width: 510px;

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