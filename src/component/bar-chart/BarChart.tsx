import * as echarts from 'echarts'

import { option } from './bar-chart-options'
import { useRef } from 'react'
import { EChartsResponsiveOption } from 'echarts'
import { useEffect } from 'react'
import { OptionProps } from '../interface'
import { hideTip, showTip } from '../tips-function'

export const BarChart = (props: OptionProps) => {
  const echartContainer = useRef<HTMLDivElement>(null)
  let node: HTMLDivElement | HTMLCanvasElement | null = null
  let barChart: echarts.EChartsType | null = null
  useEffect(() => {
    node = props.canvas.current
    // Check reference got value or not
    if (node) {
      // Set containner style
      const style = node.style
      style.height = '250px'
      style.width = '100%'
      style.margin = '0 auto'
      node.id = 'echart'

      // Initialize chart
      barChart = echarts.init(node)

      // Add data to options
      const inputProps = option(props)
      barChart && barChart.setOption(inputProps as EChartsResponsiveOption)
    }
  }, [echartContainer, props.data.current])

  useEffect(() => {
    // Render tips from other chart trigger
    if (props.showTip) {
      showTip(barChart!, props.data.current!)
      props.setShowTip(true)
    } else {
      hideTip(barChart!)
      props.setShowTip(false)
    }
  }, [props.data.current, props.showTip])

  return (
    <>
      <div ref={props.canvas} />
    </>
  )
}
