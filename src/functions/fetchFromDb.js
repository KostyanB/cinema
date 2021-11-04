export const fetchFromDb = async ({
    url,
    options = {method: 'GET'},
    loadingFn,
    successFn,
    errorFn
}) => {
    try {
        loadingFn(true);
        const responce = await fetch(url, options);
        const res = await responce.json();
        successFn(res)
    } catch (err) {
        errorFn(err);
    }
    loadingFn(false);
};