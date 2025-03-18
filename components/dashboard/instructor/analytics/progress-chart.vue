<template>
    <ApexCharts :options="chartOptions" :series="chartSeries" type="line" />
</template>

<script setup lang="ts">
import ApexCharts from "vue3-apexcharts";

type IProps = {
    chartSeries: {
        name: string;
        data: number[];
        color: string;
    }[],
}
defineProps<IProps>()

// chart options
const chartOptions = {
    chart: {
        type: 'line',
        toolbar: {
            show: false,
        },
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
};

</script>