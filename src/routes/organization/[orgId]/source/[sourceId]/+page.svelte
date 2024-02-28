<script lang="typescript">
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
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
            <p><b>Organization Name:</b> {data.harvest_source.organization_name}</p>
            <p><b>Frequency:</b> {data.harvest_source.frequency}</p>
            <p><b>Schema Type:</b> {data.harvest_source.schema_type}</p>
            <p><b>Source Type:</b> {data.harvest_source.source_type}</p>
        </div>
        <h2>Harvest Jobs</h2>
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
                <use xlink:href="/vendor/uswds/img/sprite.svg#{data.harvest_jobs[0].records_errored == 0 ? 'check' : 'cancel'}"
                ></use>
            </svg>
        </p>
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

        <!-- svelte-ignore a11y-no-noninteractive-tabindex
        <div class="usa-table-container--scrollable" tabindex="0">
            <table class="usa-table usa-table--borderless">
                <caption> Sortable borderless table with various content types </caption>
                <thead>
                    <tr>
                        <th data-sortable scope="col" role="columnheader">Alphabetical</th>
                        <th data-sortable scope="col" role="columnheader">Month</th>
                        <th data-sortable scope="col" role="columnheader">Percent</th>
                        <th data-sortable scope="col" role="columnheader">Count</th>
                        <th data-sortable scope="col" role="columnheader">Rank (Ordinal)</th>
                        <th data-sortable scope="col" role="columnheader">Rank (Cardinal)</th>
                        <th data-sortable scope="col" role="columnheader">Unix Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Tango</th>
                        <td data-sort-value="3">March</td>
                        <td data-sort-value="0.206" class="font-mono-sm text-tabular text-right"> 20.6% </td>
                        <td data-sort-value="23612" class="font-mono-sm text-tabular text-right"> 23,612 </td>
                        <td data-sort-value="3">Third</td>
                        <td data-sort-value="3">3rd</td>
                        <td data-sort-value="1332884673452">March 27, 2012</td>
                    </tr>
                    <tr>
                        <th scope="row">Foxtrot</th>
                        <td data-sort-value="4">April</td>
                        <td data-sort-value="0.026" class="font-mono-sm text-tabular text-right"> 2.6% </td>
                        <td data-sort-value="-32" class="font-mono-sm text-tabular text-right"> -32 </td>
                        <td data-sort-value="1">First</td>
                        <td data-sort-value="1">1st</td>
                        <td data-sort-value="1617974313232">April 9, 2021</td>
                    </tr>
                    <tr>
                        <th scope="row">Hilo</th>
                        <td data-sort-value="1">January</td>
                        <td data-sort-value="-0.036" class="font-mono-sm text-tabular text-right"> -3.6% </td>
                        <td data-sort-value="0.002" class="font-mono-sm text-tabular text-right"> 0.002 </td>
                        <td data-sort-value="2">Second</td>
                        <td>2nd</td>
                        <td data-sort-value="1611169964684">January 20, 2021</td>
                    </tr>
                    <tr>
                        <th scope="row">Bravo</th>
                        <td data-sort-value="12">December</td>
                        <td data-sort-value="-3.006" class="font-mono-sm text-tabular text-right"> -300.6% </td>
                        <td data-sort-value="0" class="font-mono-sm text-tabular text-right"> 0 </td>
                        <td data-sort-value="4">Fourth</td>
                        <td data-sort-value="4">4th</td>
                        <td data-sort-value="1608114345343">December 16, 2020</td>
                    </tr>
                </tbody>
            </table>
            <div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>
        </div> -->
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
