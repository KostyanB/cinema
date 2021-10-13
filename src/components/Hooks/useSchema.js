import { useState, useEffect } from 'react';
import env from '../../env.json';

export const useSchema = () => {
    const { frontSchema, backSchema } = env.schema;
    const [ sizes, setSizes ] = useState({});
    const [ places, setPlaces ] = useState({});

    const calcSize = (count, size, padding) => {
        const blockSize = count * (size + padding);
        return `${blockSize}px`;
    };

    const createArr = (...args) => {
        let arr = [];
        const [ yStart, yEnd, xStart, xEnd ] = args;
        for (let i = yStart; i <= yEnd; i++) {
            for (let k = xStart; k <= xEnd; k++) {
                arr.push([i, k]);
            }
        }
        return arr;
    };

    useEffect(() => {
        setSizes({
            ...sizes,
            'frontHeight': calcSize(frontSchema.y, 29, 20),
            'frontWidth': calcSize(frontSchema.x, 36, 13),
            'backHeight': calcSize(backSchema.y, 29, 20),
            'backLeftWidth': calcSize(backSchema.xLeft, 36, 13),
            'backRightWidth': calcSize(backSchema.xRight, 36, 13)
        });

        setPlaces({
            ...places,
            'frontPlaces': createArr(
                1,
                frontSchema.y,
                1,
                frontSchema.x
            ),
            'backLeftPlaces': createArr(
                frontSchema.y + 1,
                frontSchema.y + backSchema.y,
                1,
                backSchema.xLeft
            ),
            'backRightPlaces': createArr(
                frontSchema.y + 1,
                frontSchema.y + backSchema.y,
                backSchema.xLeft + 1,
                backSchema.xLeft + backSchema.xRight
            )
        });
    }, []);

    return { sizes, setSizes, places, setPlaces };
};