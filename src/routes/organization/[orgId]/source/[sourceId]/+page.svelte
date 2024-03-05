<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
    import { Line } from 'svelte-chartjs';
    import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from 'chart.js';

    ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
</script>

<div class="wrapper">
    {#if !data.harvest_source.id}
        <h2>Whooops!</h2>
        <p>Looks like you navigated to a source that doesn't exist.</p>
        <p>You passed orgId: {data.params.orgId}, sourceId: {data.params.sourceId}</p>
    {:else}
        <h1>{data.harvest_source.name}</h1>
        <h2>Harvest Source Config</h2>
        <div class="config-table">
            <p><b>Id:</b> {data.harvest_source.id}</p>
            <p><b>Name:</b> {data.harvest_source.name}</p>
            <p><b>Url:</b> <a href={data.harvest_source.url}>{data.harvest_source.url}</a></p>
            <p><b>Notification Emails:</b> {data.harvest_source.notification_emails}</p>
            <p>
                <b>Organization Id:</b>
                <a href="/organization/{data.harvest_source.organization_id}">{data.harvest_source.organization_id}</a>
            </p>
            <p><b>Frequency:</b> {data.harvest_source.frequency}</p>
            <p><b>Schema Type:</b> {data.harvest_source.schema_type}</p>
            <p><b>Source Type:</b> {data.harvest_source.source_type}</p>
        </div>
        <h2>Harvest Jobs</h2>
        {#if !data.harvest_jobs.length}
            No harvest jobs found
        {:else}
            <p>
                <a href="/organization/{data.params.orgId}/source/{data.params.sourceId}/job/{data.harvest_jobs[0].id}"
                    >Last Job Status:</a
                >
                <svg
                    class="usa-icon align-middle {data.harvest_jobs[0].records_errored == 0 ? 'check' : 'cancel'}"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                >
                    <use
                        xlink:href="/vendor/uswds/img/sprite.svg#{data.harvest_jobs[0].records_errored == 0
                            ? 'check'
                            : 'cancel'}"
                    ></use>
                </svg>
            </p>
            <Line data={data.chartData} />
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <div class="usa-table-container--scrollable" tabindex="0">
                <table class="usa-table usa-table--striped">
                    <caption> Harvest Jobs for Harvest Source Id: {data.harvest_source.id} </caption>
                    <thead>
                        <tr>
                            <th data-sortable scope="col" role="columnheader">Id</th>
                            <th data-sortable scope="col" role="columnheader">Date Created</th>
                            <th data-sortable scope="col" role="columnheader">Date Finished</th>
                            <th data-sortable scope="col" role="columnheader">Records Added</th>
                            <th data-sortable scope="col" role="columnheader">Records Deleted</th>
                            <th data-sortable scope="col" role="columnheader">Records Errored</th>
                            <th data-sortable scope="col" role="columnheader">Records Ignored</th>
                            <th data-sortable scope="col" role="columnheader">Records Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each data.harvest_jobs as jobs}
                            <tr>
                                <th scope="row"
                                    ><a href="/organization/{data.params.orgId}/source/{data.params.sourceId}/job/{jobs.id}"
                                        >{jobs.id}</a
                                    ></th
                                >
                                <td data-sort-value={jobs.date_created}> {jobs.date_created}</td>
                                <td data-sort-value={jobs.date_finished}>{jobs.date_finished} </td>
                                <td data-sort-value={jobs.records_added}>{jobs.records_added}</td>
                                <td data-sort-value={jobs.records_deleted}>{jobs.records_deleted}</td>
                                <td data-sort-value={jobs.records_errored}>{jobs.records_errored}</td>
                                <td data-sort-value={jobs.records_ignored}>{jobs.records_ignored}</td>
                                <td data-sort-value={jobs.records_updated}>{jobs.records_updated}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
                <div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>
            </div>
        {/if}
    {/if}
</div>

<style lang="scss">
    .align-middle {
        vertical-align: middle;
        top: -1px;
        &.check {
            color: green;
        }
        &.cancel {
            color: red;
        }
    }
</style>
