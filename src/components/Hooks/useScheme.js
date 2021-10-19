import { useState, useEffect } from 'react';
import env from '../../env.json';

export const useScheme = () => {
    const { front, backLeft, backRight, placeSize } = env.scheme;
    const [ coords, setCoords ] = useState(null);

    const calcSize = count => `${count * placeSize}px`;

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

    const frontWidth = calcSize(front.x),
            backLeftWidth = calcSize(backLeft.x),
            backRightWidth = calcSize(backRight.x);

    const frontPlaces = createArr(1, front.y, 1, front.x);
    const backLeftPlaces = createArr(front.y + 1, front.y + backLeft.y, 1, backLeft.x);
    const backRightPlaces = createArr(front.y + 1, front.y + backRight.y, backLeft.x + 1, backLeft.x + backRight.x);

    useEffect(() => {
        setCoords([
            [frontWidth, frontPlaces],
            [backLeftWidth, backLeftPlaces],
            [backRightWidth, backRightPlaces]
        ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { coords };
};