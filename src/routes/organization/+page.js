import { fetchClient } from '$lib/fetch.js';

export async function load({ fetch, params }) {
    const organizations = await fetchClient(fetch, `organization`)
    console.log(organizations)
    return { organizations, params }
}
