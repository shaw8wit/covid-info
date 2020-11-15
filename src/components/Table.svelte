<script>
    import f from "../data/format";

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

<div class="section mb-6">
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
                        <td>
                            <a rel="prefetch" href={c.countrySlug}>
                                {c.countryName}
                            </a>
                        </td>
                        <td>{f.number(c.active)}</td>
                        <td>{f.number(c.cases)}</td>
                        <td>{f.number(c.recovered)}</td>
                        <td>{f.number(c.deaths)}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
