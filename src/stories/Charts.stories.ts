import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Chart } from '../component/Chart'
import { oneDayTimeData, sampleData1 } from '../data/sampleData1'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Chart',
  component: Chart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  props: [{
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
  }
]
}


