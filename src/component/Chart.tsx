import * as echarts from 'echarts'

import { option } from './chart-options'
import { sampleData1, oneDayTimeData } from '../data/sampleData1'
import { useRef } from 'react'
import { EChartsResponsiveOption } from 'echarts'
import { useEffect } from 'react'

export const LineChart = (props: any) => {
  const echartContainer = useRef<HTMLDivElement>(null)
  let node = null
  useEffect(() => {
    node = echartContainer.current
    // Check reference got value or not
    if (node) {
      // Set containner style
      const style = node.style
      style.height = '100vh'
      style.width = '80%'
      style.margin = '0 auto'

      // Initialize chart
      const lineChart = echarts.init(node)
      // Add data to options
      const timeData = oneDayTimeData()
      lineChart.setOption(option(props.props) as EChartsResponsiveOption)
    }
  }, [echartContainer])

  return (
    <>
      <div ref={echartContainer} />
    </>
  )
}
