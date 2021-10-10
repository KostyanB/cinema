import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context, CalendarContext } from '../Functions/Context';
import Label from './Label';
import Selector from '../Selector';

// styled
const Wrapper = styled.div`
    padding-left: clamp(20px ,7vw, 95px);

    @media (max-width: 1140px) {
        padding-left: 0px;
    }
    @media (max-width: 1024px) {
        grid-row: 2;
    }
`;
const CinemaWrap = styled.div`
    height: 90px;
    display: flex;
    align-items: center;
    position: relative;
    width: 470px;
`;
//************************************** */
const CinemaBlock = () => {
    const cinemas = env.calendar.cinemas;

    const {
        openSelector: {
            openCinemaSelector,
            setOpenCinemaSelector,
            toggleCinemaSelector,
            setOpenSessionSelector
        },
        openButton: {
            openBtnCinema,
            setOpenBtnCinema,toggleBtnCinema,
            setOpenBtnSession
        },
    } = useContext(CalendarContext);

    const {
        calendar: { activeCinema, setActiveCinema }
    } = useContext(Context);

    const handleCinemaSelector = value => {
        setOpenCinemaSelector(false);
        setOpenBtnCinema(false);
        setActiveCinema(value);
    };

    const handleCinemaBtn = () => {
        toggleCinemaSelector();
        setOpenSessionSelector(false);
        toggleBtnCinema();
        setOpenBtnSession(false);
    };

    return (
        <Wrapper>
            <Label>Кинотеатр</Label>
            <CinemaWrap>
                <Selector items={cinemas}
                    handleSelector={handleCinemaSelector}
                    handleBtn={handleCinemaBtn}
                    openBtn={openBtnCinema}
                    openSelector={openCinemaSelector}
                    title={activeCinema}
                />
            </CinemaWrap>
        </Wrapper>
    )
};
export default CinemaBlock;