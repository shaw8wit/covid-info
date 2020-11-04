<script context="module">
    import countryNames from "../data/countryNames.js";

    export async function preload(page) {
        let country = page.params["country"];

        if (countryNames.find((s) => s.Slug === country) === undefined) {
            this.error(404, "Country not found!");
            return;
        }

        try {
            return { country: page.params["country"] };
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
</script>

<svelte:head>
    <title>Covid Tracker Info - {country}</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - {country}</h1>
    </div>
</div>

<Stat />

<Chart />
