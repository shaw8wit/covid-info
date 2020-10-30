<script>
    import Stat from "../components/Stat.svelte";
    import Chart from "../components/Chart.svelte";
    import TableContainer from "../components/TableContainer.svelte";
</script>

<svelte:head>
    <title>Covid Tracker Info</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - World</h1>
    </div>
</div>

<Stat />

<Chart />

<TableContainer />
