<script lang="typescript">
    // fetch list of orgs

    // build cards:
    //     - what do those look like?
    //     - do they contain info from last run harvest jobs?
    //     - do they contain a count of harvest sources

    // allow for client side filtering
    export let data;
    console.log(data);
</script>

<div class="wrapper">
    <h1>Organizations List</h1>
    <ul class="usa-card-group">
        {#each data.organizations as org}
            <li class="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4">
                <div class="usa-card__container">
                    <div class="usa-card__header">
                        <h2 class="usa-card__heading">{org.name}</h2>
                    </div>
                    <div class="usa-card__body">
                        <p>Potential description here</p>
                    </div>
                    <div class="usa-card__footer">
                        <a href="/organization/{org.id}" class="usa-button">View Org</a>
                    </div>
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
</style>
