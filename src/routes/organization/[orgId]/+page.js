/** @type {import('./$types').PageLoad} */
import { fetchClient } from '$lib/fetch';

export async function load({ fetch, params }) {
	const organization = await fetchClient(fetch, `organization/${params.orgId}`)
	const harvest_sources = await fetchClient(fetch, `harvest_source/?organization_id=${params.orgId}`)

	// need to associate N jobs with N sources
	const harvest_jobs = await harvest_sources.reduce(async (jobsMap, source) => {
		jobsMap[source.id] = await fetchClient(fetch, `harvest_job/?harvest_source_id=${source.id}`)
		return jobsMap
	}
		, {});
	return { organization, harvest_sources, harvest_jobs, params }
}
