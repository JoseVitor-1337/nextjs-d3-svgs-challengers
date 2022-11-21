import { memo } from 'react'

import * as d3 from 'd3'

type IMouthProps = {
  mouthWidth: number
  mouthRadius: number
}

function Mouth({ mouthWidth, mouthRadius }: IMouthProps) {
  const mounthArc = d3
    .arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2)

  const string = String(mounthArc())

  if (!string) return null

  return <path d={string} />
}

export default memo(Mouth)
