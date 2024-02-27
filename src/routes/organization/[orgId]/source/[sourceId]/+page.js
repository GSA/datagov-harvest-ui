/** @type {import('./$types').PageLoad} */
import { fetchClient } from '$lib/fetch';

export async function load({ fetch, params }) {
	const harvest_source = await fetchClient(fetch, `harvest_source/${params.sourceId}`)
	const harvest_jobs = await fetchClient(fetch, `harvest_job/?harvest_source_id=${params.sourceId}`)
	return { harvest_source, harvest_jobs, params }
}
