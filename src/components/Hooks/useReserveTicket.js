import { useState, useEffect } from 'react';
import env from '../../env.json';
import formatCostToLocale from '../../functions/formatCostToLocale';

export const useReserveTicket = () => {
    const [total, setTotal] = useState(0);
    const [localTotal, setLocalTotal] = useState(null);
    const [reserved, setReserved] = useState(null);

    const setTotalSumm = val => {
        setTotal(val);
        setLocalTotal(formatCostToLocale(val));
    };

    const createNewReserved = (coord, args) => {
        const { activeDate,
            activeMovie,
            activeCinema,
            activeSession } = args;
        return {
            reservedDate: activeDate,
            reservedMovie: activeMovie,
            reservedCinema: activeCinema,
            reservedSession: activeSession,
            reservedPlaces: [coord]
        };
    };

    const addToReserved = ({ coord, ...args }) => {
        if (!reserved) { // create new reserve
            setReserved(createNewReserved(coord, args));
            setTotalSumm(env.total.ticketCost);
        } else { // add place to reserve
            const newPlaces = [...reserved.reservedPlaces, coord];
            setReserved({
                ...reserved,
                reservedPlaces: newPlaces
            });
            setTotalSumm(newPlaces.length * env.total.ticketCost);
        }
    };

    const createNewPlacesArr = (row, place) => {
        const deletedPosition = reserved.reservedPlaces
            .findIndex(item => (item[0] === row && item[1] === place));

        return [
            ...reserved.reservedPlaces.slice(0, deletedPosition),
            ...reserved.reservedPlaces.slice(deletedPosition + 1)
        ];
    }

    const delFromReserved = coord => {
        const newPlaces = createNewPlacesArr(...coord)
        setReserved({ ...reserved, reservedPlaces: newPlaces });
        setTotalSumm(newPlaces.length * env.total.ticketCost);
    };

    const clearReserved = () => {
        setReserved(null);
        setTotalSumm(0);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => clearReserved(), []);

    return {
        reserved,
        addToReserved,
        delFromReserved,
        clearReserved,
        total,
        localTotal,
    };
};