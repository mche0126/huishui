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
      const barChartCanvas = node?.querySelector('canvas')
      barChartCanvas?.addEventListener('mousemove', (e) => {
        props.setShowTip(true)
        props.setX(e.x)
        showTip(barChart!, props.x!)
      })
      barChartCanvas?.addEventListener('mouseout', () => {
        props.setShowTip(false)
        hideTip(barChart!)
      })
      return () => {
        barChartCanvas?.removeEventListener('mousemove', (e) => {
          console.log(e.x)
          props.setShowTip(true)
          props.setX(e.x)
          showTip(barChart!, props.x!)
        })
      }
    }
  }, [echartContainer, props.x])

  useEffect(() => {
    // Render tips from other chart trigger
    if (props.showTip) {
      showTip(barChart!, props.x!)
      props.setShowTip(true)
    } else {
      hideTip(barChart!)
      props.setShowTip(false)
    }
  }, [props.x, props.showTip])

  return (
    <>
      <div ref={echartContainer} />
    </>
  )
}
