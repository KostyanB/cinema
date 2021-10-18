import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Context';
import { useSchema } from '../Hooks/useSchema';
import Place from './Place';

const Wrapper = styled.div`
    width: 1024px;
    margin: 0 auto 50px;
    display: flex;
    flex-direction: row;
`;
const FrontBlock = styled(Wrapper)`
    justify-content: center;
`;
const BackBlock = styled(Wrapper)`
    justify-content: space-between;

    &:nth-of-type(3) {
        border-bottom: ${env.colors.underline};
    }

    @media (max-width: 1240px) {
        justify-content: center;
    }
`;
const BigSeatBlock = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    margin-top: -10px;
    display: flex;
    flex-wrap: wrap;
`;
const SmallSeatBlock = styled(BigSeatBlock)`
    margin-bottom: 54px;

    @media (max-width: 1240px) {
        &:first-of-type {
            margin-right: 20px;
        }
    }
`;

//******************************************* */
const SeatBlock = () => {
    const {
        calendar: {
            activeMovieSessions,
            activeSession,
            activeMovie,
            activeDate,
            activeCinema,
        },
        reserved: {
            addReserved,
            delReserved,
            reserved
        },
    } = useContext(Context);
    // настройки рядов
    const { sizes, places } = useSchema();
    const {
        frontHeight,
        frontWidth,
        backHeight,
        backLeftWidth,
        backRightWidth
    } = sizes;
    const {
        frontPlaces,
        backLeftPlaces,
        backRightPlaces
    } = places;

    const session = activeSession && activeMovieSessions[activeSession];
    console.log('session: ', session);

    // проверка на booked
    const checkBooked = (row, place) => {
        if (session) {
            if ((row in session) && (session[row].includes(place))) {
                return true;
            } else {
                return false;
            }
        }
    };

    // проверка на reserved
    const checkReserved = (row, place) => {
        if (reserved && reserved.resPlaces.find(item => (item[0] === row && item[1] === place))) {
            return true;
        }
    };

    // добавление в резерв
    const addPlaceToReserved = (row, place) => {
        addReserved({row, place, activeDate, activeCinema, activeSession, activeMovie});
    };

    // удаление из резерва
    const delPlaceFromReserved = (row, place) => {
        delReserved(row, place);
    };

    return (
        <>
        {session &&
            <>
                <FrontBlock >
                    <BigSeatBlock width={frontWidth} height={frontHeight}>
                        {frontPlaces && frontPlaces.map(item =>
                            <Place key={`${item[0]}-${item[1]}`}
                                name={`ряд ${item[0]}, место ${item[1]}`}
                                row={item[0]}
                                place={item[1]}
                                isBooked={checkBooked(item[0], item[1])}
                                isReserved={checkReserved(item[0], item[1])}
                                addPlace={addPlaceToReserved}
                                delPlace={delPlaceFromReserved}
                            />
                        )}
                    </BigSeatBlock>
                </FrontBlock>
                <BackBlock height={backHeight}>
                    <SmallSeatBlock width={backLeftWidth}>
                    {backLeftPlaces && backLeftPlaces.map(item =>
                            <Place key={`${item[0]}-${item[1]}`}
                                name={`ряд ${item[0]}, место ${item[1]}`}
                                row={item[0]}
                                place={item[1]}
                                isBooked={checkBooked(item[0], item[1])}
                                isReserved={checkReserved(item[0], item[1])}
                                addPlace={addPlaceToReserved}
                                delPlace={delPlaceFromReserved}
                            />
                        )}
                    </SmallSeatBlock>
                    <SmallSeatBlock width={backRightWidth}>
                    {backRightPlaces && backRightPlaces.map(item =>
                            <Place key={`${item[0]}-${item[1]}`}
                                name={`ряд ${item[0]}, место ${item[1]}`}
                                row={item[0]}
                                place={item[1]}
                                isBooked={checkBooked(item[0], item[1])}
                                isReserved={checkReserved(item[0], item[1])}
                                addPlace={addPlaceToReserved}
                                delPlace={delPlaceFromReserved}
                            />
                        )}
                    </SmallSeatBlock>
                </BackBlock>
            </>
        }
        </>
    );
}
export default SeatBlock;