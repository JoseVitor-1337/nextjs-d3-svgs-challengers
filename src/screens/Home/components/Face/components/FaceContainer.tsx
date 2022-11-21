import React, { memo, ReactElement } from 'react'

type IFaceContainer = {
  children: ReactElement[]
  height: number
  width: number
}

function FaceContainer({ children, height, width }: IFaceContainer) {
  const centerX = width / 2
  const centerY = height / 2

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>{children}</g>
    </svg>
  )
}

export default memo(FaceContainer)
