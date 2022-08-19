import * as echarts from 'echarts'

import { option } from './lineChartOptions'
import { sampleData1, oneDayTimeData } from '../../data/sampleData1'
import { useRef } from 'react'
import { EChartsResponsiveOption } from 'echarts'
import { useEffect } from 'react'

export const LineChart = () => {
  const echartContainer = useRef<HTMLDivElement>(null)
  let node = echartContainer.current

  console.log(node)
  useEffect(() => {
    node = echartContainer.current
    if (node) {
      const style = node.style
      style.height = '40vh'
      style.width = '80%'
      style.margin = '0 auto'
      const lineChart = echarts.init(node)
      // Add data to options
      // console.log(option(oneDayTimeData(), sampleData1()))
      lineChart.setOption(option(oneDayTimeData(), sampleData1()) as EChartsResponsiveOption)
    }
  }, [echartContainer])

  return (
    <>
      <div ref={echartContainer} />
    </>
  )
}
