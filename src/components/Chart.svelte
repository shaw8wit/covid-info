<script>
    import { onMount, onDestroy } from "svelte";
    import Chart from "chart.js";

    export let historicData;
    export let title;

    let hideChart = false;
    let chartElement;
    let chart;

    onMount(() => {
        if (historicData && document.body.clientWidth > 500) {
            createChart();
            return;
        }
        hideChart = true;
    });

    onDestroy(() => {
        if (chart) {
            chart.destroy();
        }
    });

    function createChart() {
        chart = new Chart(chartElement.getContext("2d"), {
            type: "line",
            data: {
                datasets: historicData,
            },
            options: {
                responsive: true,
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            let label =
                                data.datasets[tooltipTiem.datasetIndex].label;
                            label += ": ";
                            label += tooltipItem.yLabel.toLocaleString();
                            return label;
                        },
                    },
                },
                title: {
                    display: true,
                    text: title,
                },
                scales: {
                    xAxes: [
                        {
                            type: "time",
                            time: {
                                parset: "D/M/YY",
                                tooltipFormat: "ll",
                            },
                            scaleLabel: {
                                display: true,
                                labelString: "D",
                            },
                        },
                    ],
                    yAxes: [
                        {
                            scaleLabel: {
                                display: true,
                            },
                            ticks: {
                                beginAtZero: false,
                                userCallback: function (value, index, values) {
                                    return value.toLocaleString();
                                },
                            },
                        },
                    ],
                },
            },
        });
    }
</script>

{#if !hideChart}
    <div class="container my-5"><canvas bind:this={chartElement} /></div>
{/if}
