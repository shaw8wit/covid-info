<script>
    export let country;
</script>

<style>
    table {
        width: 100%;
    }

    .section {
        padding: 0.5rem 1.5rem;
    }
</style>

<div class="section">
    <div class="container">
        <table class="table is-bordered is-striped">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Active</th>
                    <th>Cases</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
            </thead>
            <tbody>
                {#each country as c (c.countrySlug)}
                    <tr>
                        <td><a href={c.countrySlug}>{c.countryName}</a></td>
                        <td>{c.active}</td>
                        <td>{c.cases}</td>
                        <td>{c.recovered}</td>
                        <td>{c.deaths}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
