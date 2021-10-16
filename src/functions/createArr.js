// массив y*x
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
export default createArr;