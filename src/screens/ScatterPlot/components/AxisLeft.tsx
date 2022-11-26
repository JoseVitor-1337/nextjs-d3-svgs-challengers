import { ScaleLinear } from 'd3'

type IAxisLeftProps = {
  innerWidth: number
  tickOffset?: number
  yScale: ScaleLinear<number, number, never>
}

export default function AxisLeft({
  innerWidth,
  yScale,
  tickOffset = 3,
}: IAxisLeftProps) {
  return (
    <>
      {yScale.ticks().map((tickValue) => (
        <g
          className="tick"
          key={tickValue}
          transform={`translate(0, ${yScale(tickValue)})`}
        >
          <line x2={innerWidth} />
          <text x={-tickOffset} dy="0.32em" style={{ textAnchor: 'end' }}>
            {tickValue}
          </text>
        </g>
      ))}
    </>
  )
}
