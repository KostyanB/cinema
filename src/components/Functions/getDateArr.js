// получение массива дат по заданному периоду
const getDateArr = period => {
    const months = ['ЯНВ', 'ФЕВ', 'МАР', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ', 'АВГ', 'СЕН', 'ОКТ', 'НОЯ', 'ДЕК'];
    const weekdays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const now = new Date();
    const dateArr = [];

    // add date
    const addDays = (date, daysPeriod) => {
        const result = new Date(date);
        result.setDate(result.getDate() + daysPeriod);
        return result;
    };

    // get item from date
    const getDateItem = date => {
        const day = date.getDate();
        const weekDay = weekdays[date.getDay()];
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return {'dayNum': day, 'dayName': weekDay, 'monthName': month, 'year': year, 'date': date};
    };

    // push item to arr
    const createDateArr = () => {
        dateArr.push(getDateItem(now));

        for (let i = 1; i < period; i++) {
            const addItem = getDateItem(addDays(now, i));
            dateArr.push(addItem);
        }
    };
    createDateArr();

    return dateArr;
}
export default getDateArr;
// use
// getDateArr(yourPeriod);
