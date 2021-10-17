// форматирование даты в ru
export const formatDate = date => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    };
    const str = date.toLocaleString("ru", options);
    const formattedStr = str.charAt(0).toUpperCase() + str.substring(1);
    return formattedStr;
};