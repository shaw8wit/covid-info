<script>
    export let countryName = "";
    export let sortBy = "name";
</script>

<style>
    input,
    .select,
    select {
        width: 100%;
    }

    .column {
        padding-left: 0;
    }
</style>

<div class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-6">
                <input
                    type="text"
                    class="input"
                    placeholder="Filter Countries"
                    bind:value={countryName} />
            </div>
            <div class="column is-6">
                <div class="select">
                    <select bind:value={sortBy}>
                        <option value="name">By Country Name</option>
                        <option value="cases">Cases</option>
                        <option value="deaths">Death</option>
                        <option value="recovered">Recovered</option>
                        <option value="active">Active</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>
