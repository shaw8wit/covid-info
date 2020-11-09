<script context="module">
    import requests from "../data/requests.js";

    export async function preload() {
        try {
            const summary = await requests.summary();
            const historic = await requests.historicWorld();
            const countryData = await requests.countryData();
            return { summary, historic, countryData };
        } catch (e) {
            this.error(500, e);
        }
    }
</script>

<script>
    import Stat from "../components/Stat.svelte";
    import Chart from "../components/Chart.svelte";
    import TableContainer from "../components/TableContainer.svelte";

    export let summary;
    export let historic;
    export let countryData;
</script>

<svelte:head>
    <title>Covid Tracker Info</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - World</h1>
    </div>
</div>

<Stat {...summary} />

<Chart historicData={historic} title="world" />

<TableContainer data={countryData} />
