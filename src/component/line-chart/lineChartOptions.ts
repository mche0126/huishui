/**
 * Settings for echart
 */
export const option = (xData: string[], yData: number[]) => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false,
      },
    },
    legend: {
      data: ['catchment-Precipitation'],
      left: 10,
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
        restore: {},
        saveAsImage: {},
      },
    },
    axisPointer: {
      link: [
        {
          xAxisIndex: 'all',
        },
      ],
    },
    dataZoom: [
      {
        show: true,
        type: 'inside',
        realtime: true,
        start: 0,
        end: 100,
        xAxisIndex: [0, 1],
      },
    ],
    grid: [
      {
        left: 60,
        right: 50,
        height: '70%',
      },
    ],
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        axisLine: { onZero: true },
        data: xData,
      },
    ],
    yAxis: [
      {
        name: 'catchment-Precipitation (m)',
        nameLocation: 'middle',
        nameGap: 30,
        type: 'value',
        max: 100,
      },
    ],
    series: [
      {
        name: 'catchment-Precipitation',
        type: 'line',
        symbolSize: 8,
        data: yData,
      },
    ],
  }
}
