/** @type {import('./$types').PageLoad} */
import { fetchClient } from '$lib/fetch';

export async function load({ fetch, params }) {
	const harvest_job = await fetchClient(fetch, `harvest_job/${params.jobId}`)
	const harvest_errors = await fetchClient(fetch, `harvest_error/?harvest_job_id=${params.jobId}`)

	return { harvest_job, harvest_errors, params }
}
