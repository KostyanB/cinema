import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';
import Label from '../../Styled/Label';
import DatesItem from './DatesItem';

const Wrapper = styled.div`
    width: 410px;

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
//****************************
const DateBlock = () => {
    const {
        calendar: {
            dateArr,
            activeDate,
            setActiveDate,
        },
        reserved: {
            reserved,
            clearReserved
        },
    } = useContext(Context);

    // выбор даты
    const handleSelectedDay = value => {
        setActiveDate(value);
        // сброс резерва при смене даты
        if (reserved) clearReserved();
    };

     // ставим активную дату от наличия резерва
    useEffect(() => {
        if (reserved) setActiveDate(reserved.reservedDate);
    }, [
        dateArr,
        reserved,
        setActiveDate
    ]);

    //*************************************** */
    return (
        <Wrapper id="date-block">
            <Label>Дата</Label>
            <Items  id="date-block">
                {dateArr.map((item, i) =>
                    <DatesItem key={i}
                        param={item}
                        activeItem={activeDate}
                        handleSelectedItem={handleSelectedDay}
                    />
                )}
            </Items>
        </Wrapper>
    )
}
export default DateBlock;