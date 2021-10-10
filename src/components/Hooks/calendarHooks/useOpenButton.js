import { useState } from 'react';

export const useOpenButton = () => {

    const [openBtnCinema, setOpenBtnCinema] = useState(false);
    const [openBtnSession, setOpenBtnSession] = useState(false);

    const toggleBtnCinema = () => setOpenBtnCinema(!openBtnCinema);

    const toggleBtnSession = () => setOpenBtnSession(!openBtnSession);

    return {
        openBtnCinema,
        setOpenBtnCinema,
        toggleBtnCinema,
        openBtnSession,
        setOpenBtnSession,
        toggleBtnSession
    };
}
