import { useEffect, useRef, useState } from 'react'
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
    const mouseOverFunction = (e: MouseEvent) => {
      if (e) {
        setShowTip(true)
        data.current = e.x + 20
        x !== e.x ? setX(e.x) : null
      }
    }
    chart?.addEventListener('mousemove', mouseOverFunction)
    chart?.addEventListener('mouseout', () => {
      setShowTip(false)
    })
    return () => chart?.removeEventListener('mousemove', mouseOverFunction)
  }

  useEffect(() => {
    setLineChart(lineCanvas.current!)
    setScatterChart(scatterCanvas.current!)
    setBarChart(barCanvas.current!)
  }, [])

  useEffect(() => {
    listenerFunctions(lineCharts!)
  }, [lineCharts])

  useEffect(() => {
    listenerFunctions(barCharts!)
  }, [barCharts])

  useEffect(() => {
    listenerFunctions(scatterCharts!)
  }, [scatterCharts])

  return (
    <>
      <div>
        <BarChart
          xData={dayData}
          yData={sampleData}
          showTip={showTip}
          canvas={barCanvas}
          setShowTip={setShowTip}
          data={data}
        />
        <LineChart
          xData={dayData}
          yData={sampleData}
          showTip={showTip}
          canvas={lineCanvas}
          setShowTip={setShowTip}
          data={data}
        />
        <ScatterChart
          xData={dayData}
          yData={sampleData}
          showTip={showTip}
          canvas={scatterCanvas}
          setShowTip={setShowTip}
          data={data}
        />
      </div>
    </>
  )
}

export default App
