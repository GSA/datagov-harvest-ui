/** @type {import('./$types').PageLoad} */
import { fetchClient } from '$lib/fetch';

export async function load({ fetch, params }) {
	const response = await fetchClient(fetch, `organization/${params.orgId}`)
	return { ...response, params }
}
