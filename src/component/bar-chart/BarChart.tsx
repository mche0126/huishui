import * as echarts from 'echarts'
import { option } from './bar-chart-options'
import { useRef, useEffect } from 'react'
import { EChartsResponsiveOption } from 'echarts'
import { OptionProps } from '../interface'
import { hideTip, showTip } from '../tips-function'

export const BarChart = (props: OptionProps) => {
  const echartContainer = useRef<HTMLDivElement>(null)

  let node: HTMLDivElement | HTMLCanvasElement | null = null
  const barChart = useRef<echarts.EChartsType | null>(null)
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
      barChart.current = echarts.init(node)
    }
  }, [echartContainer, props.canvas])

  useEffect(() => {
    // Add data to options
    const inputProps = option(props)
    barChart.current && barChart.current.setOption(inputProps as EChartsResponsiveOption)
  }, [props.data.current])

  useEffect(() => {
    // Render tips from other chart trigger
    if (props.showTip) {
      showTip(barChart.current!, props.data.current!)
      props.setShowTip(true)
    } else {
      hideTip(barChart.current!)
      props.setShowTip(false)
    }
  }, [props.data.current, props.showTip])

  return (
    <>
      <div ref={props.canvas} />
    </>
  )
}
