import { ScaleLinear } from 'd3'

type IAxisBottom = {
  tickFormat: (value: number) => string
  xScale: ScaleLinear<number, number, never>
  innerHeight: number
}

export default function Page({ xScale, innerHeight, tickFormat }: IAxisBottom) {
  return (
    <>
      {xScale.ticks().map((tickValue: number) => (
        <g
          className="tick"
          key={tickValue}
          transform={`translate(${xScale(tickValue)}, 0)`}
        >
          <line y2={innerHeight} />
          <text y={innerHeight} dy="1.5rem" style={{ textAnchor: 'middle' }}>
            {tickFormat(tickValue)}
          </text>
        </g>
      ))}
    </>
  )
}
