/**
 * Settings for echart
 */
export const option = (props: Array<{ xData: string[]; yData: number[] }>) => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false,
      },
    },
    legend: {
      data: ['bar', 'line', 'dot'],
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
        realtime: true,
        start: 0,
        end: 100,
        xAxisIndex: [0, 1, 2],
      },
      {
        show: true,
        realtime: true,
        start: 0,
        end: 100,
        xAxisIndex: [0, 1, 2],
      },
      {
        type: 'inside',
        realtime: true,
        start: 0,
        end: 100,
        xAxisIndex: [0, 1, 2],
      },
    ],
    grid: [
      {
        left: 60,
        right: 50,
        height: '22%',
      },
      {
        left: 60,
        right: 50,
        top: '35%',
        height: '22%',
      },
      {
        left: 60,
        right: 50,
        top: '64%',
        height: '22%',
      },
    ],
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        axisLine: { onZero: true },
        position: 'top',
        data: props[0].xData,
      },
      {
        gridIndex: 1,
        type: 'category',
        boundaryGap: true,
        axisLine: { onZero: true },
        data: props[1].xData,
      },
      {
        gridIndex: 2,
        type: 'category',
        boundaryGap: true,
        axisLine: { onZero: true },
        data: props[2].xData,
      },
    ],
    yAxis: [
      {
        name: 'bar',
        nameLocation: 'middle',
        nameGap: 30,
        type: 'value',
        max: 100,
        inverse: true,
      },
      {
        gridIndex: 1,
        name: 'line',
        nameLocation: 'middle',
        nameGap: 30,
        type: 'value',
        max: 100,
      },
      {
        gridIndex: 2,
        name: 'dot',
        nameLocation: 'middle',
        nameGap: 30,
        type: 'value',
        max: 100,
      },
    ],
    series: [
      {
        name: 'bar',
        type: 'bar',
        data: props[0].yData,
      },
      {
        name: 'line',
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        symbolSize: 8,
        data: props[1].yData,
      },
      {
        name: 'dot',
        type: 'scatter',
        xAxisIndex: 2,
        yAxisIndex: 2,
        symbolSize: 8,
        data: props[2].yData,
      },
    ],
  }
}
