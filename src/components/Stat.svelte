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
        padding: 1rem 0;
        text-align: center;
    }
</style>

<div class="section">
    <div class="container">
        <div class="columns">
            <h3 class="is-3 column">
                Country Code :<br /><strong>{CC}</strong>
            </h3>
            <h3 class="is-3 column">
                Total Confirmed :<br /><strong>{tC}</strong>
            </h3>
            <h3 class="is-3 column">
                Total Deaths :<br /><strong>{tD}</strong>
            </h3>
            <h3 class="is-3 column">
                Total Recovered :<br /><strong>{tR}</strong>
            </h3>
        </div>
    </div>
</div>

<div class="section">
    <div class="container">
        <div class="columns">
            <h3 class="is-3 column">
                Updated :<br /><strong>{updated}</strong>
            </h3>
            <h3 class="is-3 column">
                New Confirmed :<br /><strong>{nC}</strong>
            </h3>
            <h3 class="is-3 column">New Deaths :<br /><strong>{nD}</strong></h3>
            <h3 class="is-3 column">
                New Recovered :<br /><strong>{nR}</strong>
            </h3>
        </div>
    </div>
</div>
