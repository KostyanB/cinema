import { useState, useEffect } from 'react';
import env from '../../env.json';
import formatCostToLocale from '../../functions/formatCostToLocale';

export const useReserveTicket = () => {
    const [ reserved, setReserved ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ localTotal, setLocalTotal ] = useState(null);

    const addReserved = (row, place) => {
        const sum = (reserved.length + 1) * env.total.ticketCost;
        setTotal(sum);
        setLocalTotal(formatCostToLocale(sum));
        setReserved([...reserved, [row, place]]);
    };

    const delReserved = (row, place) => {
        const newSum = (reserved.length - 1) * env.total.ticketCost;
        const delPos = reserved.findIndex(item => (item[0] === row && item[1] === place));
        const newReserved = [...reserved.slice(0, delPos), ...reserved.slice(delPos + 1)];
        setTotal(newSum);
        setLocalTotal(formatCostToLocale(newSum));
        setReserved(newReserved);
    };

    useEffect(() => {
        setReserved([]);
        setTotal(0);
        setLocalTotal(formatCostToLocale(0));
    }, []);

    return {
        reserved,
        addReserved,
        delReserved,
        total,
        localTotal,
    };
};