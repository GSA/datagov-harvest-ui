<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>

<div class="wrapper">
    {#if !data.organization.id}
        <h2>Whooops!</h2>
        <p>Looks like you navigated to an org that doesn't exist.</p>
        <p>You passed orgId: {data.params.orgId}</p>
    {:else}
        <h1>{data.organization.name}</h1>
        <h2>Organization Config</h2>
        <div class="config-table">
            <p><b>Name:</b> {data.organization.name}</p>
            <p><b>Id:</b> {data.organization.id}</p>
        </div>
        <h2>Harvest Sources</h2>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        {#if !data.harvest_sources.length}
            No harvest sources found
        {:else}
            <div class="usa-table-container--scrollable" tabindex="0">
                <table class="usa-table usa-table--striped">
                    <caption> Harvest Sources for Org Id: {data.organization.id} </caption>
                    <thead>
                        <tr>
                            <th data-sortable scope="col" role="columnheader">Health</th>
                            <th data-sortable scope="col" role="columnheader">Name</th>
                            <th data-sortable scope="col" role="columnheader">Url</th>
                            <th data-sortable scope="col" role="columnheader">Id</th>
                            <th data-sortable scope="col" role="columnheader">Notification Emails</th>
                            <th data-sortable scope="col" role="columnheader">Organization Id</th>
                            <th data-sortable scope="col" role="columnheader">Frequency</th>
                            <th data-sortable scope="col" role="columnheader">Schema Type</th>
                            <th data-sortable scope="col" role="columnheader">Source Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each data.harvest_sources as source, index}
                            <tr>
                                <th scope="row">
                                    {#if data.harvest_jobs[source.id]}
                                        <a
                                            href="/organization/{data.params.orgId}/source/{source.id}/job/{data.harvest_jobs[
                                                source.id
                                            ][0].id}"
                                        >
                                            <button
                                                type="button"
                                                class="usa-button usa-button{data.harvest_jobs[source.id][index]
                                                    .records_errored == 0
                                                    ? ''
                                                    : '--secondary'}"
                                                >{data.harvest_jobs[source.id][index].records_errored == 0
                                                    ? 'Healthy'
                                                    : 'Error'}</button
                                            >
                                        </a>
                                    {:else}
                                        <button type="button" class="usa-button usa-button--base usa-button--hover">
                                            N/A
                                        </button>
                                    {/if}
                                </th>
                                <td data-sort-value={source.date_created}
                                    ><a href="/organization/{data.params.orgId}/source/{source.id}">{source.name}</a></td
                                >
                                <td data-sort-value={source.records_errored}><a href={source.url}>{source.url}</a></td>
                                <td data-sort-value={source.id}>{source.id}</td>
                                <td data-sort-value={source.date_finished}>{source.notification_emails} </td>
                                <td data-sort-value={source.records_added}>{source.organization_id}</td>
                                <td data-sort-value={source.records_deleted}>{source.frequency}</td>
                                <td data-sort-value={source.records_ignored}>{source.schema_type}</td>
                                <td data-sort-value={source.records_updated}>{source.source_type}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
                <div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>
            </div>
        {/if}
    {/if}
</div>

<style>
</style>
