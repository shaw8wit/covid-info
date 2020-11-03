<script>
    export let nC;
    export let tC;
    export let nD;
    export let tD;
    export let nR;
    export let tR;
    export let CC;
    export let updated;
</script>

<style>
    .columns {
        border: solid 2px black;
    }
</style>

<div class="section">
    <div class="container">
        <div class="columns">
            <h3 class="is-3 column">Country Code : <strong>{CC}</strong></h3>
            <h3 class="is-3 column">Total Confirmed : <strong>{tC}</strong></h3>
            <h3 class="is-3 column">Total Deaths : <strong>{tD}</strong></h3>
            <h3 class="is-3 column">Total Recovered : <strong>{tR}</strong></h3>
        </div>
    </div>
</div>

<div class="section">
    <div class="container">
        <div class="columns">
            <h3 class="is-3 column">Time : <strong>{updated}</strong></h3>
            <h3 class="is-3 column">New Confirmed : <strong>{nC}</strong></h3>
            <h3 class="is-3 column">New Deaths : <strong>{nD}</strong></h3>
            <h3 class="is-3 column">New Recovered : <strong>{nR}</strong></h3>
        </div>
    </div>
</div>
