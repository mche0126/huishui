import * as echarts from 'echarts'

import { option } from './scatter-chart-options'
import { useRef } from 'react'
import { EChartsResponsiveOption } from 'echarts'
import { useEffect } from 'react'
import { OptionProps } from '../interface'
import { hideTip, showTip } from '../tips-function'

export const ScatterChart = (props: OptionProps) => {
  const echartContainer = useRef<HTMLDivElement>(null)
  let node: HTMLDivElement | HTMLCanvasElement | null = null
  let scatterChart: echarts.EChartsType | null = null
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
      scatterChart = echarts.init(node)

      // Add data to options
      const inputProps = option(props)
      inputProps && scatterChart && scatterChart.setOption(inputProps as EChartsResponsiveOption)
      const scatterChartCanvas = node?.querySelector('canvas')
      scatterChartCanvas?.addEventListener('mousemove', (e) => {
        props.showTip ? null : props.setShowTip(true)
        props.x === e.x ? null : (props.setX(e.x), localStorage.setItem('x', e.x.toString()))
        showTip(scatterChart!, props.x!)
      })
      scatterChartCanvas?.addEventListener('mouseout', () => {
        props.showTip ? (props.setShowTip(false), localStorage.removeItem('x')) : null
        hideTip(scatterChart!)
      })
    }
  }, [echartContainer, props])

  useEffect(() => {
    // Render tips from other chart trigger
    if (props.showTip) {
      showTip(scatterChart!, props.x!)
      props.setShowTip(true)
    } else {
      hideTip(scatterChart!)
      props.setShowTip(false)
    }
  }, [props])

  return (
    <>
      <div ref={echartContainer} />
    </>
  )
}
