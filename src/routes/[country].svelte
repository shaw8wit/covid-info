<script context="module">
    import countryNames from "../data/countryNames.js";
    import requests from "../data/requests.js";

    export async function preload(page) {
        let country = page.params["country"];

        if (countryNames.find((s) => s.Slug === country) === undefined) {
            this.error(404, "Country not found!");
            return;
        }

        try {
            const stats = await requests.countryStats(country);
            const historic = await requests.historicCountry(country);
            return { country, stats, historic };
        } catch (e) {
            this.error(500, e);
        }
    }
</script>

<script>
    import Stat from "../components/Stat.svelte";
    import Chart from "../components/Chart.svelte";
    import TableContainer from "../components/TableContainer.svelte";
    export let country;
    export let stats;
    export let historic;
</script>

<svelte:head>
    <title>Covid Tracker Info - {country}</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - {country.charAt(0).toUpperCase() + country.slice(1)}</h1>
    </div>
</div>

<Stat {...stats} />

<Chart historicData={historic} title="Covid 19 - {country}" />
