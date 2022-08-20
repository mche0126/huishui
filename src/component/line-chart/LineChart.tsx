import * as echarts from 'echarts'

import { option } from './line-chart-options'
import { useRef } from 'react'
import { EChartsResponsiveOption } from 'echarts'
import { useEffect } from 'react'
import { OptionProps } from '../interface'
import { hideTip, showTip } from '../tips-function'

export const LineChart = (props: OptionProps) => {
  const echartContainer = useRef<HTMLDivElement>(null)
  let node: HTMLDivElement | HTMLCanvasElement | null = null
  let lineChart: echarts.EChartsType | null = null
  useEffect(() => {
    node = echartContainer.current
    // Check reference got value or not
    if (node) {
      // Set containner style
      const style = node.style
      style.height = '250px'
      style.width = '100%'
      style.margin = '0 auto'
      node.id = 'echart'

      // Initialize chart
      lineChart = echarts.init(node)

      // Add data to options
      const inputProps = option(props)
      inputProps && lineChart && lineChart.setOption(inputProps as EChartsResponsiveOption)
      const lineChartCanvas = node?.querySelector('canvas')
      lineChartCanvas?.addEventListener('mousemove', (e) => {
        props.showTip ? null : props.setShowTip(true)
        props.x === e.x ? null : (props.setX(e.x), localStorage.setItem('x', e.x.toString()))
        showTip(lineChart!, props.x!)
      })
      lineChartCanvas?.addEventListener('mouseout', () => {
        props.showTip ? (props.setShowTip(false), localStorage.removeItem('x')) : null
        hideTip(lineChart!)
      })
    }
  }, [echartContainer, props])

  useEffect(() => {
    // Render tips from other chart trigger
    if (props.showTip) {
      showTip(lineChart!, props.x!)
      props.setShowTip(true)
    } else {
      hideTip(lineChart!)
      props.setShowTip(false)
    }
  }, [props])

  return (
    <>
      <div ref={echartContainer} />
    </>
  )
}
