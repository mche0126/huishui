export const showTip = (lineChart: echarts.EChartsType, x: number) => {
  lineChart?.dispatchAction({
    type: 'showTip',
    x: x,
    y: 150,
  })
}

export const hideTip = (lineChart: echarts.EChartsType) => {
  lineChart?.dispatchAction({
    type: 'hideTip',
  })
}
