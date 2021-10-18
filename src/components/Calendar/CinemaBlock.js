import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';
import Label from './Label';
import Selector from '../Selector';

// styled
const Wrapper = styled.div`
    padding-left: clamp(20px ,7vw, 95px);

    @media (max-width: 1240px) {
        padding-left: 0px;
        order: 3;
    }
    @media (max-width: 576px) {
        order: unset;
    }
    @media (max-width: 440px) {
        width: 100%;
    }
`;
const CinemaWrap = styled.div`
    height: 90px;
    display: flex;
    align-items: center;
    width: 470px;

    @media (max-width: 576px) {
        width: 300px;
    }
`;

//************************************** */
const CinemaBlock = () => {
    const {
        calendar: {
            activeCinema,
            setActiveCinema,
            activeMovieSessions,
            cinemasList,
        },
        reserved: {
            clearReserved,
            reserved,
        },
    } = useContext(Context);

    // выбор кинотеатра
    const handleSelectedCinema = value => {
        setActiveCinema(value);
        // сброс резерва при смене кинотеатра
        if (reserved) {
            clearReserved();
        }
    };

    // ставим активный кинотеатр от наличия резерва
    useEffect(() => {
        if (activeMovieSessions) {
            if (reserved) {
                setActiveCinema(reserved.resCinema);
            } else {
                // setActiveCinema(cinemasList[0]);
            }
        }
    }, [activeMovieSessions, reserved, setActiveCinema, cinemasList]);

    //****************************** */
    return (
        <Wrapper>
            <Label>Кинотеатр</Label>
            <CinemaWrap>
                {cinemasList &&
                    <Selector items={cinemasList}
                        handleSelectParam={handleSelectedCinema}
                        activeSelector={activeCinema}
                        name="cinema"
                    />
                }
            </CinemaWrap>
        </Wrapper>
    )
};
export default CinemaBlock;