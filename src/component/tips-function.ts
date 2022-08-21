/**
 * Generate the tips according to the x position of cursor
 * @param chart vdom element whihc reprents the canvas
 * @param x x position
 */
export const showTip = (chart: echarts.EChartsType, x: number) => {
  chart?.dispatchAction({
    type: 'showTip',
    x: x,
    y: 150,
    position: [x, 150],
  })
}

/**
 *  Hide the tips
 * @param chart vdom element whihc reprents the canvas
 */
export const hideTip = (chart: echarts.EChartsType) => {
  chart?.dispatchAction({
    type: 'hideTip',
  })
}
