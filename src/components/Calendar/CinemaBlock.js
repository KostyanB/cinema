import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Functions/Context';
import Label from './Label';
import Selector from '../Selector';

// styled
const Wrapper = styled.div`
    padding-left: clamp(20px ,7vw, 95px);

    @media (max-width: 1240px) {
        padding-left: 0px;
        grid-row: 2;
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
    @media (max-width: 768px) {
        width: 400px;
    }
    @media (max-width: 576px) {
        width: 300px;
    }
    @media (max-width: 440px) {
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
        selectors: {
            openSelectorCinema,
            closeCinema,
            closeSession,
            toggleCinema,
            setOutsideCinema,
            setInsideClick
        },
    } = useContext(Context);

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
                    handleBtn={handleCinemaSelectors}
                    isOpen={openSelectorCinema}
                    title={activeCinema}
                    handleOutsideClick={handleOutsideClick}
                />
            </CinemaWrap>
        </Wrapper>
    )
};
export default CinemaBlock;