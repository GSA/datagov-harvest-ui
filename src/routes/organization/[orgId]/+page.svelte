<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>

<div class="wrapper">
    {#if !data.id}
        <h2>Whooops!</h2>
        <p>Looks like you navigated to an org that doesn't exist. You passed {data.params.orgId}</p>
    {:else}
        <h2>{data.name}</h2>
        <h3>Name: {data.name}</h3>
        <h3>Id: {data.id}</h3>
    {/if}
</div>

<style>
</style>
