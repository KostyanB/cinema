import React, { useContext } from 'react';
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
            cinemasList,
        },
    } = useContext(Context);

    // выбор кинотеатра
    const handleSelectedCinema = value => {
        setActiveCinema(value);
    };

    return (
        <Wrapper>
            <Label>Кинотеатр</Label>
            <CinemaWrap>
                {cinemasList &&
                    <Selector items={cinemasList}
                        handleSelectParam={handleSelectedCinema}
                        title={activeCinema}
                        name="cinema"
                    />
                }
            </CinemaWrap>
        </Wrapper>
    )
};
export default CinemaBlock;