import { useState } from 'react';

export const useReserved = () => {
    const [ reserved, setReserved ] = useState([]);

    const addReserved = (row, place) => setReserved([...reserved, [row, place]]);

    const delReserved = (row, place) => {
        const delPos = reserved.findIndex(item => (item[0] === row && item[1] === place));
        const newReserved = [...reserved.slice(0, delPos), ...reserved.slice(delPos + 1)];
        setReserved(newReserved);
    };

    return {
        reserved,
        addReserved,
        delReserved
    };
};