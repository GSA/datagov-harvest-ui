import { fetchClient } from '$lib/fetch.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    const organizations = await fetchClient(fetch, `organization`)
    return { organizations, params }
}
