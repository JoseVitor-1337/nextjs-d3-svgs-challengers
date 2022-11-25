import { ScaleBand } from 'd3'

type IAxisLeftProps = {
  yScale: ScaleBand<string>
}

export default function AxisLeft({ yScale }: IAxisLeftProps) {
  return (
    <>
      {yScale.domain().map((tickValue) => (
        <text
          key={tickValue}
          dx="-0.5rem"
          dy="0.5rem"
          style={{ textAnchor: 'end' }}
          y={yScale(tickValue) || 0 + yScale.bandwidth() / 2}
        >
          {tickValue}
        </text>
      ))}
    </>
  )
}
