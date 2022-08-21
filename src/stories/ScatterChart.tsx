import { EChartsResponsiveOption } from 'echarts';
import React, { useEffect, useRef } from 'react';
import { OptionProps } from '../component/interface';
import { option } from '../component/scatter-chart/scatter-chart-options';
import { hideTip, showTip } from '../component/tips-function';


export default function ScatterChart(props: OptionProps){
  const echartContainer = useRef<HTMLDivElement>(null)

  const scatterChart = useRef<echarts.EChartsType | null>(null)
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
      scatterChart.current = echarts.init(node.current)
    }
  }, [echartContainer, props.canvas])

  useEffect(() => {
    // Add data to options
    const inputProps = option(props)
    scatterChart.current && scatterChart.current.setOption(inputProps as EChartsResponsiveOption)
  }, [props])

  useEffect(() => {
    // Render tips from other chart trigger
    if (props.showTip) {
      showTip(scatterChart.current!, props.data)
      props.setShowTip(true)
    } else {
      hideTip(scatterChart.current!)
      props.setShowTip(false)
    }
  }, [props])

  return (
    <>
      <div ref={props.canvas} />
    </>
  )
}
