import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Functions/Context';
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
    const { sizes, places } = useSchema();
    const {
        calendar: {
            activeMovieDb,
            activeSession,
        },
        // reserved: {
        //     addReserved
        // }
    } = useContext(Context);
    // настройки рядов
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
    // проверка на booked
    const checkBooked = (row, place) => {
        const session = activeMovieDb[activeSession];

        if (session) {
            if ((row in session) && (session[row].includes(place))) {
                return true;
            } else {
                return false;
            }
        }
    };

    return (
        <>
        {/* {activeSession && */}
            <>
                <FrontBlock >
                    <BigSeatBlock width={frontWidth} height={frontHeight}>
                        {frontPlaces && frontPlaces.map(item =>
                            <Place key={`${item[0]}-${item[1]}`}
                                name={`ряд ${item[0]}, место ${item[1]}`}
                                row={item[0]}
                                place={item[1]}
                                booked={checkBooked(item[0], item[1])}
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
                                booked={checkBooked(item[0], item[1])}
                            />
                        )}
                    </SmallSeatBlock>
                    <SmallSeatBlock width={backRightWidth}>
                    {backRightPlaces && backRightPlaces.map(item =>
                            <Place key={`${item[0]}-${item[1]}`}
                                name={`ряд ${item[0]}, место ${item[1]}`}
                                row={item[0]}
                                place={item[1]}
                                booked={checkBooked(item[0], item[1])}
                            />
                        )}
                    </SmallSeatBlock>
                </BackBlock>
            </>
        {/* } */}
        </>
    );
}
export default SeatBlock;