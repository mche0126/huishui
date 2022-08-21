/**
 *  Chart Props
 */
export interface OptionProps {
  xData: string[]
  yData: number[]
  showTip: boolean
  x: number | undefined
  setShowTip: React.Dispatch<React.SetStateAction<boolean>>
  setX: React.Dispatch<React.SetStateAction<number | undefined>>
}
