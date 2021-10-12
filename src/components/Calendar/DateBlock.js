import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import getDateArr from '../Functions/getDateArr';
import Label from './Label';
import DatesItem from './DatesItem';

const Wrapper = styled.div`
    @media (max-width: 1240px) {
        grid-row: 1;
        grid-column: 1 / 3;
        justify-self: center;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

`;
const Diva = styled.div`
    /* width: 510px; */
    @media (max-width: 1240px) {
        /* width: 100%; */
        /* justify-content: center; */
    }

`;
const Items = styled.ul`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    flex-wrap: wrap;
    width: 420px;
    /* width: 100%; */

    &:after {
        content: '';
        flex-grow: 1;
    }

    @media (max-width: 1240px) {
        width: 740px;
        /* width: 100%; */
        /* justify-content: center; */
    }
`;

const DateBlock = () => {
    const dateArr = getDateArr(env.calendar.showPeriod);

    return (
        <Wrapper>
            <Label>Дата</Label>
            <Diva>
            <Items>
                {dateArr.map((item, i) =>
                    <DatesItem key={i} dateParam={item}/>
                )}
            </Items>
            </Diva>
        </Wrapper>
    )
}
export default DateBlock;