import { OptionProps } from '../interface'

/**
 * Settings for echart
 */
export const option = (props: OptionProps) => {
  return {
    title: {
      name: 'LineChart',
      show: true,
      left: 'middle',
    },
    tooltip: {
      trigger: 'axis',
      show: true,
      triggerOn: 'none',
      position: function (pt: number[]) {
        console.log(props.x)
        return [props.x, 130]
      },
      transitionDurition: 0,
    },
    legend: {
      data: ['line'],
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
    grid: {
      top: 50,
      left: 50,
      right: 15,
      height: 160,
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      axisLine: { onZero: true },
      position: 'bottom',
      data: props.xData,
    },
    yAxis: {
      name: 'line',
      nameLocation: 'middle',
      nameGap: 30,
      type: 'value',
      max: 100,
      min: -100,
    },
    series: {
      name: 'line',
      type: 'line',
      color: '#9BF',
      data: props.yData,
    },
  }
}
