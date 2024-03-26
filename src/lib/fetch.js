// import { PUBLIC_API_ROUTE } from '$env/static/public';

/**
 * @param {function} fetchLib
 * @param {string} route
 * @param {string} param
 */

export async function fetchClient(fetchLib, route) {
    return await fetchLib(`/api/${route}`)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Not 2xx response", { cause: response });
            } else {
                return response.json()
            }
        })
        .catch(function (err) {
            console.error(`ERROR IN FETCH.JS :: ${err}`);
            return {}
        });
}
``
