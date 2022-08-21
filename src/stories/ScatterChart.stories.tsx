import { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ScatterChart } from '../component/scatter-chart/ScatterChart';
import { OptionProps } from '../component/interface';
import { sampleData1, sampleData2, oneDayTimeData } from '../data/sampleData';
import { useRef } from '@storybook/addons';

export default {
  title: 'Huishui/ScatterChart',
  component: ScatterChart,
} as ComponentMeta<typeof ScatterChart>

const [showTip, setShowTip] = useState<boolean>(false)
const Template = (args: OptionProps) => <ScatterChart {...args} />;
const cursorPosition: any = (event: any): number => {
  var xCursorPosition = event.clientX;
  return xCursorPosition
}

export const Default: ComponentStory<typeof ScatterChart> = Template.bind({});
Default.args = {
  xData: oneDayTimeData(),
  yData: sampleData2(),
  canvas: useRef(document.createElement('div')),
  setShowTip: setShowTip,
  data: 50,
}

export const RandomSeries: ComponentStory<typeof ScatterChart> = Template.bind({})
RandomSeries.args = {
  ...Default.args,
  yData: sampleData1()
}




