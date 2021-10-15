
export const getReserved = () => JSON.parse(localStorage.getItem('cinema-reserve'));
export const setReserved = data => localStorage.setItem('cinema-reserve', JSON.stringify(data));
export const clearReserved = () => localStorage.removeItem('cinema-reserve');