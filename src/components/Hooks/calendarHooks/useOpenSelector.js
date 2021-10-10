import { useState } from 'react';

export const useOpenSelector = () => {
    const [ openCinemaSelector, setOpenCinemaSelector ] = useState(false);
    const [ openSessionSelector, setOpenSessionSelector ] = useState(false);

    const toggleCinemaSelector = () => setOpenCinemaSelector(!openCinemaSelector);
    const toggleSessionSelector = () => setOpenSessionSelector(!openSessionSelector);

    return {
        openCinemaSelector,
        setOpenCinemaSelector,
        toggleCinemaSelector,
        openSessionSelector,
        setOpenSessionSelector,
        toggleSessionSelector,
    };
}