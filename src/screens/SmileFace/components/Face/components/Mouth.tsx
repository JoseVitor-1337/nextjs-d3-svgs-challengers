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

  return <path d={String(mounthArc())} />
}

export default memo(Mouth)
