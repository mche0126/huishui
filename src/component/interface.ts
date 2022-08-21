import React from 'react'

/**
 *  Chart Props
 */
export interface OptionProps {
  xData: string[]
  yData: number[]
  showTip: boolean
  canvas: React.RefObject<HTMLDivElement>
  setShowTip: React.Dispatch<React.SetStateAction<boolean>>
  data: React.MutableRefObject<number | undefined>
}
