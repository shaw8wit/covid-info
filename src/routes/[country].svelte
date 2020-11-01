<script context="module">
    export async function preload(page) {
        return { country: page.params["country"] };
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
