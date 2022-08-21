import * as echarts from 'echarts'
import { option } from './line-chart-options'
import { useRef, useEffect } from 'react'
import { EChartsResponsiveOption } from 'echarts'
import { OptionProps } from '../interface'
import { hideTip, showTip } from '../tips-function'

export const LineChart = (props: OptionProps) => {
  const echartContainer = useRef<HTMLDivElement>(null)

  let node: HTMLDivElement | HTMLCanvasElement | null = null
  const lineChart = useRef<echarts.EChartsType | null>(null)
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
      lineChart.current = echarts.init(node)
    }
  }, [echartContainer, props.canvas])

  useEffect(() => {
    // Add data to options
    const inputProps = option(props)
    lineChart.current && lineChart.current.setOption(inputProps as EChartsResponsiveOption)
  }, [props.data.current])

  useEffect(() => {
    // Render tips from other chart trigger
    if (props.showTip) {
      showTip(lineChart.current!, props.data.current!)
      props.setShowTip(true)
    } else {
      hideTip(lineChart.current!)
      props.setShowTip(false)
    }
  }, [props.data.current, props.showTip])

  return (
    <>
      <div ref={props.canvas} />
    </>
  )
}
