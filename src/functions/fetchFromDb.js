export const fetchFromDb = async ({ url, options = {method: 'GET'}, loadingFn, successFn, errorFn }) => {
    try {
        loadingFn(true);
        const json = await fetch(url, options);
        const res = await json.json();
        successFn(res)
    } catch (err) {
        errorFn(err);
    }
    loadingFn(false);
};