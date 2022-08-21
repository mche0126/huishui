import * as echarts from 'echarts'
import { option } from './bar-chart-options'
import { useRef, useEffect } from 'react'
import { EChartsResponsiveOption } from 'echarts'
import { OptionProps } from '../interface'
import { hideTip, showTip } from '../tips-function'

export const BarChart = (props: OptionProps) => {
  const echartContainer = useRef<HTMLDivElement>(null)

  const barChart = useRef<echarts.EChartsType | null>(null)
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
      barChart.current = echarts.init(node.current)
    }
  }, [echartContainer, props.canvas])

  useEffect(() => {
    // Add data to options
    const inputProps = option(props)
    barChart.current && barChart.current.setOption(inputProps as EChartsResponsiveOption)
  }, [props])

  useEffect(() => {
    // Render tips from other chart trigger
    if (props.showTip) {
      showTip(barChart.current!, props.data)
      props.setShowTip(true)
    } else {
      hideTip(barChart.current!)
      props.setShowTip(false)
    }
  }, [props])

  return (
    <>
      <div ref={props.canvas} />
    </>
  )
}
