import { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LineChart } from '../component/line-chart/LineChart';
import { OptionProps } from '../component/interface';
import { sampleData1, sampleData2, oneDayTimeData } from '../data/sampleData';
import { useRef } from '@storybook/addons';

export default {
  title: 'Huishui/LineChart',
  component: LineChart,
} as ComponentMeta<typeof LineChart>

const [showTip, setShowTip] = useState<boolean>(false)
const Template = (args: OptionProps) => <LineChart {...args} />;


export const Default: ComponentStory<typeof LineChart> = Template.bind({});
Default.args = {
  xData: oneDayTimeData(),
  yData: sampleData2(),
  canvas: useRef(document.createElement('div')),
  setShowTip: setShowTip,
  data: 50,
}

export const RandomSeries: ComponentStory<typeof LineChart> = Template.bind({})
RandomSeries.args = {
  ...Default.args,
  yData: sampleData1()
}




