import { useState } from 'react'
import './App.css'
import { BarChart } from './component/bar-chart/BarChart'

import { LineChart } from './component/line-chart/LineChart'
import { ScatterChart } from './component/scatter-chart/ScatterChart'
import { sampleData2, oneDayTimeData, sampleData1 } from './data/sampleData'

function App() {
  const [showTip, setShowTip] = useState<boolean>(false)
  const [x, setX] = useState<number | undefined>(+localStorage.getItem('x')!)

  const dayData = oneDayTimeData()
  const sampleData = sampleData2()

  return (
    <>
      <div>
        <BarChart
          xData={dayData}
          yData={sampleData}
          showTip={showTip}
          x={x}
          setShowTip={setShowTip}
          setX={setX}
        />
        <LineChart
          xData={dayData}
          yData={sampleData}
          showTip={showTip}
          x={x}
          setShowTip={setShowTip}
          setX={setX}
        />
        <ScatterChart
          xData={dayData}
          yData={sampleData}
          showTip={showTip}
          x={x}
          setShowTip={setShowTip}
          setX={setX}
        />
      </div>
    </>
  )
}

export default App
