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
      barChart = echarts.init(node)

      // Add data to options
      const inputProps = option(props)
      inputProps && barChart && barChart.setOption(inputProps as EChartsResponsiveOption)
      const lineChartCanvas = node?.querySelector('canvas')
      lineChartCanvas?.addEventListener('mousemove', (e) => {
        props.showTip ? null : props.setShowTip(true)
        props.x === e.x ? null : (props.setX(e.x), localStorage.setItem('x', e.x.toString()))
        console.log(e.y)
        showTip(barChart!, props.x!)
      })
      lineChartCanvas?.addEventListener('mouseout', () => {
        props.showTip ? (props.setShowTip(false), localStorage.removeItem('x')) : null
        hideTip(barChart!)
      })
    }
  }, [echartContainer, props])

  useEffect(() => {
    // Render tips from other chart trigger
    if (props.showTip) {
      showTip(barChart!, props.x!)
      props.setShowTip(true)
    } else {
      hideTip(barChart!)
      props.setShowTip(false)
    }
  }, [props])

  return (
    <>
      <div ref={echartContainer} />
    </>
  )
}
