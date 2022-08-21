import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import { BarChart } from './component/bar-chart/BarChart'

import { LineChart } from './component/line-chart/LineChart'
import { ScatterChart } from './component/scatter-chart/ScatterChart'
import { sampleData2, oneDayTimeData } from './data/sampleData'

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

  const listenerFunctions = useCallback(
    (chart: HTMLDivElement) => {
      const mouseOverFunction = (e: MouseEvent) => {
        if (e) {
          setShowTip(true)
          data.current = e.x
          x !== e.x ? setX(e.x) : null
        }
      }
      chart?.addEventListener('mousemove', mouseOverFunction)
      chart?.addEventListener('mouseout', () => {
        setShowTip(false)
      })
      return () => chart?.removeEventListener('mousemove', mouseOverFunction)
    },
    [x],
  )

  useEffect(() => {
    setLineChart(lineCanvas.current ?? document.createElement('div'))
    setScatterChart(scatterCanvas.current ?? document.createElement('div'))
    setBarChart(barCanvas.current ?? document.createElement('div'))
  }, [])

  useEffect(() => {
    listenerFunctions(lineCharts ?? document.createElement('div'))
  }, [lineCharts, listenerFunctions])

  useEffect(() => {
    listenerFunctions(barCharts ?? document.createElement('div'))
  }, [barCharts, listenerFunctions])

  useEffect(() => {
    listenerFunctions(scatterCharts ?? document.createElement('div'))
  }, [scatterCharts, listenerFunctions])

  return (
    <>
      <div>
        <BarChart
          xData={dayData}
          yData={sampleData}
          showTip={showTip}
          canvas={barCanvas}
          setShowTip={setShowTip}
          data={data.current ?? 0}
        />
        <LineChart
          xData={dayData}
          yData={sampleData}
          showTip={showTip}
          canvas={lineCanvas}
          setShowTip={setShowTip}
          data={data.current ?? 0}
        />
        <ScatterChart
          xData={dayData}
          yData={sampleData}
          showTip={showTip}
          canvas={scatterCanvas}
          setShowTip={setShowTip}
          data={data.current ?? 0}
        />
      </div>
    </>
  )
}

export default App
