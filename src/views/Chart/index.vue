<template>
  <div class="app-container">
    <div id="div1" class="chartStyle"></div>
    <div>update files</div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
import { echartsData } from './service'

onMounted(async () => {
  try {
    const res = await echartsData()
    if (res.meta.status === 200) {
      const myChart = echarts.init(document.getElementById('div1'))
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: res.data.legend,
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: res.data.xAxis,
        yAxis: res.data.yAxis,
        series: res.data.series,
      }
      myChart.setOption(option)
    }
  } catch (err) {
    console.log(err);
  }
})
</script>

<style scoped>
.chartStyle{
  width: 100%; 
  height: 400px;
}
</style>
