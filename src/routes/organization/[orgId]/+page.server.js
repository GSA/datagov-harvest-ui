import { fetchClient } from '$lib/fetch';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const organization = await fetchClient(fetch, `organization/${params.orgId}`)
	const harvest_sources = await fetchClient(fetch, `harvestSourceByOrg/${params.orgId}`)

	// need to associate N jobs with N sources
	const harvest_jobs = await harvest_sources.reduce(async (jobsMap, source) => {
		jobsMap[source.id] = await fetchClient(fetch, `harvestJobsBySource/${source.id}`)
		return jobsMap
	}
		, {});
	return { organization, harvest_sources, harvest_jobs, params }
}
