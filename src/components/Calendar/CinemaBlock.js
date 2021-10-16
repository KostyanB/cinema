import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context, SelectorsContext } from '../Context';
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
    const cinemas = env.calendar.cinemas;

    const {
        calendar: {
            activeCinema,
            setActiveCinema
        },
    } = useContext(Context);
    const { selectors: {
        openSelectorCinema,
        closeCinema,
        closeSession,
        toggleCinema,
        setOutsideCinema,
        setInsideClick
    }} = useContext(SelectorsContext);

    // выбор кинотеатра
    const handleSelectedCinema = value => {
        closeCinema();
        setActiveCinema(value);
        setInsideClick();
    };
    // управление открытием селектора
    const handleCinemaSelectors = () => {
        toggleCinema();
        closeSession();
        setInsideClick();
    };
    // фиксация клика мимо селектора
    const handleOutsideClick = () => setOutsideCinema(true);

    return (
        <Wrapper>
            <Label>Кинотеатр</Label>
            <CinemaWrap>
                <Selector items={cinemas}
                    handleSelector={handleSelectedCinema}
                    handleButton={handleCinemaSelectors}
                    isOpen={openSelectorCinema}
                    title={activeCinema}
                    handleOutsideClick={handleOutsideClick}
                />
            </CinemaWrap>
        </Wrapper>
    )
};
export default CinemaBlock;