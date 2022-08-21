import React from "react"

/**
 *  Chart Props
 */
export interface OptionProps {
  xData: string[]
  yData: number[]
  showTip: boolean
  x: number | undefined
  canvas: React.RefObject<HTMLDivElement>
  setShowTip: React.Dispatch<React.SetStateAction<boolean>>
  data: React.MutableRefObject<number | undefined>
}
