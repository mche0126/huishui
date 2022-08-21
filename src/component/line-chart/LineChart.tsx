import * as echarts from 'echarts'
import { option } from './line-chart-options'
import { useRef, useEffect } from 'react'
import { EChartsResponsiveOption } from 'echarts'
import { OptionProps } from '../interface'
import { hideTip, showTip } from '../tips-function'

export const LineChart = (props: OptionProps) => {
  const echartContainer = useRef<HTMLDivElement>(null)

  const lineChart = useRef<echarts.EChartsType | null>(null)
  const node = useRef<HTMLDivElement | HTMLCanvasElement | null>(null)
  useEffect(() => {
    node.current = props.canvas.current
    // Check reference got value or not
    if (node.current) {
      // Set containner style
      const style = node.current.style
      style.height = '250px'
      style.width = '100vw'
      style.margin = '0 auto'
      node.current.id = 'echart'

      // Initialize chart
      lineChart.current = echarts.init(node.current)
    }
  }, [echartContainer, props.canvas])

  useEffect(() => {
    // Add data to options
    const inputProps = option(props)
    lineChart.current && lineChart.current.setOption(inputProps as EChartsResponsiveOption)
  }, [props])

  useEffect(() => {
    // Render tips from other chart trigger
    if (props.showTip) {
      showTip(lineChart.current!, props.data)
      props.setShowTip(true)
    } else {
      hideTip(lineChart.current!)
      props.setShowTip(false)
    }
  }, [props])

  return (
    <>
      <div ref={props.canvas} />
    </>
  )
}
