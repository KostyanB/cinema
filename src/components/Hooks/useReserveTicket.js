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
    };

    const addReserved = ({
        coord,
        activeDate,
        activeCinema,
        activeSession,
        activeMovie
    }) => {
        if (!reserved) {
            const resObj = {
                reservedDate: activeDate,
                reservedMovie: activeMovie,
                reservedCinema: activeCinema,
                reservedSession: activeSession,
                reservedPlaces: [coord]
            };
            setReserved(resObj);
            totalSet(env.total.ticketCost)
        } else {
            const newPlaces = [...reserved.reservedPlaces, coord];
            setReserved({
                ...reserved,
                reservedPlaces: newPlaces
            });
            totalSet(newPlaces.length * env.total.ticketCost);
        }
    };

    const delReserved = (row, place) => {
        const deletedPosition = reserved.reservedPlaces.findIndex(item =>
            (item[0] === row && item[1] === place));
        const newPlaces = [
            ...reserved.reservedPlaces.slice(0, deletedPosition),
            ...reserved.reservedPlaces.slice(deletedPosition + 1)
        ];
        setReserved({ ...reserved, reservedPlaces: newPlaces });
        totalSet(newPlaces.length * env.total.ticketCost);
    };

    const clearReserved = () => {
        setReserved(null);
        totalSet(0);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
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