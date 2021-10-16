import React, { useContext, useState } from 'react';
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

const Place = ({ name, row, place, booked }) => {
    const [ isReserved, setIsReserved ] = useState(false);
    const {
        reserved: {
            addReserved,
            delReserved
        }
    } = useContext(Context);
    // управление резервированием
    const handleReserved = () => {
        if (booked) {
            return;
        } else {
            if (!isReserved) {
                addReserved(row, place);
                setIsReserved(true);
            } else {
                setIsReserved(false);
                delReserved(row, place);
            }
        }
    };

    return (
        <PlaceWrap dataRow={row}
            dataPlace={place}
            booked={booked}
            onClick={handleReserved}
            reserved={isReserved}
        >
            <SeatIcon name={name} width={36} height={29}/>
        </PlaceWrap>
    )
}
export default Place;