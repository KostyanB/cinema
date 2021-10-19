import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Context';
import { SeatIcon } from '../Styled/Icons/Icons';

const { orange: activeColor, booked: bookedColor, free: freeColor } = env.colors;

const PlaceWrap = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
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

const Seat = ({ coord, isBooked, isReserved }) => {
    const [ row, place ] = coord;
    const {
        calendar: {
            activeSession,
            activeMovie,
            activeDate,
            activeCinema,
        },
        reserved: {
            addReserved,
            delReserved,
        },
    } = useContext(Context);

    // управление резервированием
    const handleReserved = () => {
        if (isBooked) {
            return;
        } else {
            if (!isReserved) {
                // addPlace(row, place);
                // добавление в резерв
                addReserved({row, place, activeDate, activeCinema, activeSession, activeMovie});
            } else {
                // delPlace(row, place);
                // удаление из резерва
                delReserved(row, place);
            }
        }
    };

    return (
        <PlaceWrap size={`${env.scheme.placeSize}px`}
            dataRow={row}
            dataPlace={place}
            booked={isBooked}
            onClick={handleReserved}
            reserved={isReserved}
        >
            <SeatIcon name={`ряд ${row}, место ${place}`} width={36} height={29}/>
        </PlaceWrap>
    )
}
export default Seat;