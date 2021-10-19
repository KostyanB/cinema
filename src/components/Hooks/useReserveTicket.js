import { useState, useEffect } from 'react';
import env from '../../env.json';
import formatCostToLocale from '../../functions/formatCostToLocale';

export const useReserveTicket = () => {
    const [total, setTotal] = useState(0);
    const [localTotal, setLocalTotal] = useState(null);
    const [reserved, setReserved] = useState(null);

    const totalSet = val => {
        setTotal(val);
        setLocalTotal(formatCostToLocale(val));
    }
    const addReserved = ({
        coord,
        activeDate,
        activeCinema,
        activeSession,
        activeMovie
    }) => {
        if (!reserved) {
            const resObj = {
                resDate: activeDate,
                resMovie: activeMovie,
                resCinema: activeCinema,
                resSession: activeSession,
                resPlaces: [coord]
            };
            setReserved(resObj);
            totalSet(env.total.ticketCost)
        } else {
            const newPlaces = [...reserved.resPlaces, coord];
            setReserved({
                ...reserved,
                resPlaces: newPlaces
            });
            totalSet(newPlaces.length * env.total.ticketCost);
        }
    };

    const delReserved = ([row, place]) => {
        const delPos = reserved.resPlaces.findIndex(item => (item[0] === row && item[1] === place));
        const newPlaces = [...reserved.resPlaces.slice(0, delPos), ...reserved.resPlaces.slice(delPos + 1)];
        setReserved({
            ...reserved,
            resPlaces: newPlaces
        });
        totalSet(newPlaces.length * env.total.ticketCost);
    }

    const clearReserved = () => {
        setReserved(null);
        totalSet(0);
    };

    useEffect(() => clearReserved(), []);

    return {
        reserved,
        addReserved,
        delReserved,
        clearReserved,
        total,
        localTotal,
    };
};