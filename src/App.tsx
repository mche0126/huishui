import './App.css'
import { LineChart } from './component/Chart'
import { sampleData1, oneDayTimeData } from './data/sampleData1'

function App() {
  const props = [
    {
      xData: oneDayTimeData(),
      yData: sampleData1(),
    },
    {
      xData: oneDayTimeData(),
      yData: sampleData1(),
    },
    {
      xData: oneDayTimeData(),
      yData: sampleData1(),
    },
  ]

  return <LineChart props={props} />
}

export default App
