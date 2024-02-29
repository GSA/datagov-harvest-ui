/** @type {import('./$types').PageLoad} */
import { fetchClient } from '$lib/fetch';

export async function load({ fetch, params }) {
	const harvest_source = await fetchClient(fetch, `harvest_source/${params.sourceId}`)
	const harvest_jobs = await fetchClient(fetch, `harvest_job/?harvest_source_id=${params.sourceId}`)
	const rawChartData = harvest_jobs.reduce((accum, job) => {
		accum[0].data.push(job.records_added)
		accum[1].data.push(job.records_deleted)
		accum[2].data.push(job.records_errored)
		accum[3].data.push(job.records_ignored)
		return accum
	}, [
		{
			label: "Added",
			data: [],
			fill: true,
			lineTension: 0.3,
			borderColor: "green"
		},
		{
			label: "Deleted",
			data: [],
			fill: true,
			lineTension: 0.3,
			borderColor: "black"
		},
		{
			label: "Errored",
			data: [],
			fill: true,
			lineTension: 0.3,
			borderColor: "red"
		},
		{
			label: "Ignored",
			data: [],
			fill: true,
			lineTension: 0.3,
			borderColor: "gray"
		}
	]
	)
	let chartData = {
		labels: harvest_jobs.reduce((accum, job) => accum = [...accum, job.date_finished], []),
		datasets: rawChartData
	}
	return { harvest_source, harvest_jobs, chartData, params }
}
