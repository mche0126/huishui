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
      position: function () {
        return [props.data.current, 150]
      },
      transitionDurition: 0,
    },
    legend: {
      data: ['bar'],
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
      position: 'top',
      data: props.xData,
    },
    yAxis: {
      name: 'bar',
      nameLocation: 'middle',
      nameGap: 30,
      type: 'value',
      max: 100,
      min: -100,
    },
    series: {
      name: 'bar',
      type: 'bar',
      color: '#9F0',
      data: props.yData,
    },
  }
}
