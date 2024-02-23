<script lang="typescript">
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>

<div class="wrapper">
    <h1>Single Harvest Job Page</h1>
    <h2>Org Id: {data.orgId}</h2>
    <h2>Source Id: {data.sourceId}</h2>
    <h2>Job Id: {data.jobId}</h2>
</div>

<style>
</style>
