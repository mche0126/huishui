import { ChartView } from 'echarts/lib/echarts'
import { useEffect, useRef, useState } from 'react'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import { cachedDataVersionTag } from 'v8'
import './App.css'
import { BarChart } from './component/bar-chart/BarChart'

import { LineChart } from './component/line-chart/LineChart'
import { ScatterChart } from './component/scatter-chart/ScatterChart'
import { sampleData2, oneDayTimeData, sampleData1 } from './data/sampleData'

function App() {
  const [showTip, setShowTip] = useState<boolean>(false)
  const [x, setX] = useState<number | undefined>()
  const [lineCharts, setLineChart] = useState<HTMLDivElement>()
  const [barCharts, setBarChart] = useState<HTMLDivElement>()
  const [scatterCharts, setScatterChart] = useState<HTMLDivElement>()

  const data = useRef<number | undefined>(undefined)

  const dayData = oneDayTimeData()
  const sampleData = sampleData2()

  const barCanvas = useRef<HTMLDivElement | null>(null)
  const lineCanvas = useRef<HTMLDivElement | null>(null)
  const scatterCanvas = useRef<HTMLDivElement | null>(null)

  const listenerFunctions = (chart: HTMLDivElement) => {
    const mouseMoveAction = (e: MouseEvent) => {
      if (e) {
        setX(e.x)
        setShowTip(true)
        data.current = e.x
      }
      console.log(data.current)
    }
    chart?.addEventListener('mousemove', mouseMoveAction)
    return () => chart?.removeEventListener('mousemove', mouseMoveAction)
  }

  useEffect(() => {
    setLineChart(lineCanvas.current!)
    setScatterChart(scatterCanvas.current!)
    setBarChart(barCanvas.current!)
  }, [])

  useEffect(() => {
    listenerFunctions(lineCharts!)
  }, [lineCharts, x])

  useEffect(() => {
    listenerFunctions(barCharts!)
  }, [barCharts, x])

  useEffect(() => {
    listenerFunctions(scatterCharts!)
  }, [scatterCharts, x])

  return (
    <>
      <div>
        <BarChart
          xData={dayData}
          yData={sampleData}
          showTip={showTip}
          x={x}
          canvas={barCanvas}
          setShowTip={setShowTip}
          data={data}
        />
        <LineChart
          xData={dayData}
          yData={sampleData}
          showTip={showTip}
          x={x}
          canvas={lineCanvas}
          setShowTip={setShowTip}
          data={data}
        />
        <ScatterChart
          xData={dayData}
          yData={sampleData}
          showTip={showTip}
          x={x}
          canvas={scatterCanvas}
          setShowTip={setShowTip}
          data={data}
        />
      </div>
    </>
  )
}

export default App
