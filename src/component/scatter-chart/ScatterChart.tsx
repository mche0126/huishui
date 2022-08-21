import * as echarts from 'echarts'
import { option } from './scatter-chart-options'
import { useRef, useEffect } from 'react'
import { EChartsResponsiveOption } from 'echarts'
import { OptionProps } from '../interface'
import { hideTip, showTip } from '../tips-function'

export const ScatterChart = (props: OptionProps) => {
  const echartContainer = useRef<HTMLDivElement>(null)

  let node: HTMLDivElement | HTMLCanvasElement | null = null
  const scatterChart = useRef<echarts.EChartsType | null>(null)
  useEffect(() => {
    node = props.canvas.current
    // Check reference got value or not
    if (node) {
      // Set containner style
      const style = node.style
      style.height = '250px'
      style.width = '100vw'
      style.margin = '0 auto'
      node.id = 'echart'

      // Initialize chart
      scatterChart.current = echarts.init(node)
    }
  }, [echartContainer, props.canvas])

  useEffect(() => {
    // Add data to options
    const inputProps = option(props)
    scatterChart.current && scatterChart.current.setOption(inputProps as EChartsResponsiveOption)
  }, [props.data.current])

  useEffect(() => {
    // Render tips from other chart trigger
    if (props.showTip) {
      showTip(scatterChart.current!, props.data.current!)
      props.setShowTip(true)
    } else {
      hideTip(scatterChart.current!)
      props.setShowTip(false)
    }
  }, [props.data.current, props.showTip])

  return (
    <>
      <div ref={props.canvas} />
    </>
  )
}
