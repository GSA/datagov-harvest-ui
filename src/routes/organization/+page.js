import { fetchClient } from '$lib/fetch.js';

export async function load({ fetch, params }) {
    const test = await fetchClient(fetch, `organizations`)
    return { test }
}
