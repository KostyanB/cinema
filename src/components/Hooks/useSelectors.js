import { useState } from 'react';

export const useSelectors = () => {
    const [ openSelectorCinema, setOpenSelectorCinema ] = useState(false);
    const [ openSelectorSession, setOpenSelectorSession ] = useState(false);
    const [ outsideCinema, setOutsideCinema ] = useState(false);
    const [ outsideSession, setOutsideSession ] = useState(false);


    const toggleCinema = () => setOpenSelectorCinema(!openSelectorCinema);
    const toggleSession = () => setOpenSelectorSession(!openSelectorSession);

    const closeCinema = () => setOpenSelectorCinema(false);
    const closeSession = () => setOpenSelectorSession(false);

    const closeAllSelectors = () => {
        closeCinema();
        closeSession();
    };

    const setInsideClick = () => {
        setOutsideCinema(false);
        setOutsideSession(false);
    };

    return {
        openSelectorCinema,
        openSelectorSession,
        closeCinema,
        closeSession,
        toggleCinema,
        toggleSession,
        closeAllSelectors,
        outsideCinema,
        setOutsideCinema,
        outsideSession,
        setOutsideSession,
        setInsideClick
    };
}