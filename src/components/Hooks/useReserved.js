import { useState, useEffect } from 'react';
import env from '../../env.json';

export const useReserved = () => {
    const [ reserved, setReserved ] = useState([]);
    const [ total, setTotal ] = useState(0)

    useEffect(() => {
        setReserved([]);
        setTotal(0);
    }, []);

    const addReserved = (row, place) => {
        setTotal((reserved.length + 1) * env.ticketCost);
        setReserved([...reserved, [row, place]]);
    };

    const delReserved = (row, place) => {
        setTotal((reserved.length - 1) * env.ticketCost);
        const delPos = reserved.findIndex(item => (item[0] === row && item[1] === place));
        const newReserved = [...reserved.slice(0, delPos), ...reserved.slice(delPos + 1)];
        setReserved(newReserved);
    };

    return {
        reserved,
        addReserved,
        delReserved,
        total,
        setTotal
    };
};