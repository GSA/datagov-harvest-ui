/** @type {import('./$types').PageServerLoad} */
import { fetchClient } from '$lib/fetch';

export async function load({ fetch, params }) {
	const harvest_job = await fetchClient(fetch, `harvestJob/${params.jobId}`)
	const harvest_errors = await fetchClient(fetch, `harvestErrorByJob/${params.jobId}`)

	return { harvest_job, harvest_errors, params }
}
