import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../../env.json';
import { Context } from '../../Context';
import { useScheme } from '../../Hooks/useScheme';
import Seat from './Seat';

const Wrapper = styled.div`
    width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    border-bottom: ${env.colors.underline};

    justify-content: space-between;
    @media (max-width: 1240px) {
        justify-content: center;
    }
`;
const Block = styled.div`
    width: ${props => props.width};
    margin-top: -10px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;

    &:first-of-type {
        margin: -10px auto 45px;
        }

    @media (max-width: 1240px) {
        &:last-of-type {
            margin-left: 30px;
        }
    }
`;

//******************************************* */
const SeatBlock = () => {
    const {
        calendar: {
            activeMovieSessions,
            activeSession,
        },
        reserved: {
            reserved
        },
    } = useContext(Context);
    const { coords } = useScheme();

    const session = activeSession && activeMovieSessions[activeSession];

    // проверка на booked/reserved
    const checkSeatStatus = (row, place) => {
        if (session) {
            if ((row in session) && (session[row].includes(place))) {
                return 'isBooked';
            } else if (reserved && reserved.reservedPlaces
                .find(item => (item[0] === row && item[1] === place)))
            {
                return 'isReserved';
            } else {
                return '';
            }
        }
    };

    return (
        <>
        {session &&
            <Wrapper >
                {coords && coords.map((item, i) =>
                    <Block key={i} width={item[0]} >
                        {item[1].map(coord =>
                            <Seat key={`${coord[0]}-${coord[1]}`}
                                coord={coord}
                                status={checkSeatStatus(...coord)}
                            />
                        )}
                    </Block>
                )}
            </Wrapper>
        }
        </>
    );
}
export default SeatBlock;