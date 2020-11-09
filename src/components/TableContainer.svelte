<script>
    import TableFilter from "./TableFilter.svelte";
    import Table from "./Table.svelte";

    export let data;

    $: country = data;
</script>

<TableFilter />

<Table {country} />
