import React from '@storybook/react';
import { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BarChart } from '../component/bar-chart/BarChart';
import { OptionProps } from '../component/interface';
import { sampleData1, sampleData2, oneDayTimeData } from '../data/sampleData';
import { useRef } from '@storybook/addons';

export default {
  title: 'Huishui/BarChart',
  component: BarChart,
} as ComponentMeta<typeof BarChart>

const [showTip, setShowTip] = useState<boolean>(false)
const Template = (args: OptionProps) => <BarChart {...args} />;
const cursorPosition: any = (event: any): number => {
  var xCursorPosition = event.clientX;
  return xCursorPosition
}

export const Default: ComponentStory<typeof BarChart> = Template.bind({});
Default.args = {
  xData: oneDayTimeData(),
  yData: sampleData2(),
  canvas: useRef(document.createElement('div')),
  setShowTip: setShowTip,
  data: 50,
}

export const RandomSeries: ComponentStory<typeof BarChart> = Template.bind({})
RandomSeries.args = {
  ...Default.args,
  yData: sampleData1()
}




