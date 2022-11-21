import { memo } from 'react'

type IBackgroundCircleProps = {
  radius: number
  strokeWidth: number
}

function BackgroundCircle({ radius, strokeWidth }: IBackgroundCircleProps) {
  return (
    <circle r={radius} fill="yellow" stroke="black" strokeWidth={strokeWidth} />
  )
}

export default memo(BackgroundCircle)
