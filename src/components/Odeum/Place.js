import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Context';
import { SeatIcon } from '../Styled/Icons/Icons';

const { orange: activeColor, booked: bookedColor, free: freeColor } = env.colors;

const PlaceWrap = styled.div`
    width: 49px;
    height: 49px;
    cursor: ${props => props.booked ? 'not-allowed' : 'pointer'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.booked ? bookedColor :
            props.reserved ? activeColor :
                freeColor};

    &:hover , :active {
        color: ${props => props.booked ? bookedColor : activeColor};
    }
`;

const Place = ({ name, row, place, isBooked, addPlace, delPlace, isReserved }) => {
    // const [ isReserved, setIsReserved ] = useState(false);
    // const {
    //     reserved: {
    //         addReserved,
    //         delReserved,
    //     }
    // } = useContext(Context);

    // управление резервированием
    const handleReserved = () => {
        if (isBooked) {
            return;
        } else {
            if (!isReserved) {
                // setReserved(true);
                // addReserved(row, place);
                addPlace(row, place);
            } else {
                // setIsReserved(false);
                // delReserved(row, place);
                delPlace(row, place);
            }
        }
    };
    // useEffect(() => {
    //     res && setIsReserved(true);
    // }, [])

    return (
        <PlaceWrap dataRow={row}
            dataPlace={place}
            booked={isBooked}
            onClick={handleReserved}
            reserved={isReserved}
        >
            <SeatIcon name={name} width={36} height={29}/>
        </PlaceWrap>
    )
}
export default Place;