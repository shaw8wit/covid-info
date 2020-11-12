<script>
    import TableFilter from "./TableFilter.svelte";
    import Table from "./Table.svelte";

    export let data;

    let sortBy = "name";
    let countryName = "";

    $: country = filterAndSort(data, countryName, sortBy);

    function filterAndSort(countries, countryName, sortBy) {
        const filteredCountry = countries.filter((c) => {
            return (
                countryName === "" ||
                c.countrySlug.indexOf(countryName.toLowerCase()) > -1
            );
        });

        if (sortBy != "name") {
            return filteredCountry.sort((a, b) => {
                return +b[sortBy] - +a[sortBy];
            });
        }

        return filteredCountry;
    }
</script>

<TableFilter bind:countryName bind:sortBy />

<Table {country} />
