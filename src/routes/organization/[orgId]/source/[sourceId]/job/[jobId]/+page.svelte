<script lang="typescript">
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>

<div class="wrapper">
    {#if !data.harvest_job.id}
        <h2>Whooops!</h2>
        <p>Looks like you navigated to a job that doesn't exist.</p>
        <p>You passed orgId: {data.params.orgId}, sourceId: {data.params.sourceId}, jobId: {data.params.orgId}</p>
    {:else}
        <h1>Details for Harvest Job Id: {data.harvest_job.id}</h1>
        <h2>Job Info</h2>
        <div class="job-config">
            <p><b>Date Created:</b> {data.harvest_job.date_created}</p>
            <p><b>Date Finished:</b> {data.harvest_job.date_finished}</p>
            <p>
                <b>Harvest Source Id:</b>
                <a href="/organization/{data.params.orgId}/source/{data.params.sourceId}"
                    >{data.harvest_job.harvest_source_id}</a
                >
            </p>
            <p><b>Id:</b> {data.harvest_job.id}</p>
            <p><b>Records Added:</b> {data.harvest_job.records_added}</p>
            <p><b>Records Deleted:</b> {data.harvest_job.records_deleted}</p>
            <p><b>Records Errored:</b> {data.harvest_job.records_errored}</p>
            <p><b>Records Ignored:</b> {data.harvest_job.records_ignored}</p>
            <p><b>Records Updated:</b> {data.harvest_job.records_updated}</p>
        </div>

        <h2>Job Error Table</h2>
        <!-- #TODO: fix this err -->
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div class="usa-table-container--scrollable" tabindex="0">
            <table class="usa-table usa-table--striped">
                <caption> Harvest Error Info for {data.harvest_job.id} </caption>
                <thead>
                    <tr>
                        <th data-sortable scope="col" role="columnheader">Date Created</th>
                        <th data-sortable scope="col" role="columnheader">Harvest Job Id</th>
                        <th data-sortable scope="col" role="columnheader">Id</th>
                        <th data-sortable scope="col" role="columnheader">Message</th>
                        <th data-sortable scope="col" role="columnheader">Records Id</th>
                        <th data-sortable scope="col" role="columnheader">Record Reported Id</th>
                        <th data-sortable scope="col" role="columnheader">Severity</th>
                        <th data-sortable scope="col" role="columnheader">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {#each data.harvest_errors as errors}
                        <tr>
                            <td data-sort-value={errors.date_created}> {errors.date_created}</td>
                            <td data-sort-value={errors.harvest_job_id}>{errors.harvest_job_id} </td>
                            <td data-sort-value={errors.id}>{errors.id}</td>
                            <td data-sort-value={errors.message}>{errors.message}</td>
                            <td data-sort-value={errors.record_id}>{errors.record_id}</td>
                            <td data-sort-value={errors.record_reported_id}>{errors.record_reported_id}</td>
                            <td data-sort-value={errors.severity}>{errors.severity}</td>
                            <td data-sort-value={errors.type}>{errors.type}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
            <div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>
        </div>
    {/if}
</div>

<style>
</style>
