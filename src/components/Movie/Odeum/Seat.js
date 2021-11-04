import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../../env.json';
import { Context } from '../../Context';
import { SeatIcon } from '../../Styled/Icons/Icons';

const {
    selectedPlace,
    bookedPlace,
    freePlace
} = env.colors;

// styled
const PlaceWrap = styled.div`
    width: ${env.scheme.placeSize}px;
    height: ${env.scheme.placeSize}px;
    cursor: ${props => (props.status === 'isBooked') ?
        'not-allowed' :
            'pointer'
    };
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => (props.status === 'isBooked') ? bookedPlace :
        (props.status === 'isReserved') ? selectedPlace :
            freePlace
    };

    &:hover , :active {
        color: ${props => (props.status === 'isBooked') ?
            bookedPlace :
                selectedPlace
        };
    }
`;
//************************************
const Seat = ({ coord, status }) => {
    const [ row, place ] = coord;
    const {
        calendar: {
            activeSession,
            activeMovie,
            activeDate,
            activeCinema,
        },
        reserved: {
            addToReserved,
            delFromReserved,
        },
    } = useContext(Context);

    // управление резервированием
    const handleReserved = () => {
        if (status === 'isBooked') {
            return;
        } else {
            if (status !== 'isReserved') { // добавление в резерв
                addToReserved({
                    coord,
                    activeDate,
                    activeCinema,
                    activeSession,
                    activeMovie
                });
            } else { // удаление из резерва
                delFromReserved(coord);
            }
        }
    };

    return (
        <PlaceWrap onClick={handleReserved}
            status={status}
        >
            <SeatIcon name={`ряд ${row}, место ${place}`}
                width={36}
                height={29}
            />
        </PlaceWrap>
    );
}
export default Seat;