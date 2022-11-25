import { ScaleLinear } from 'd3'

type IAxisBottom = {
  xScale: ScaleLinear<number, number, never>
  innerHeight: number
}

export default function Page({ xScale, innerHeight }: IAxisBottom) {
  return (
    <>
      {xScale.ticks().map((tickValue: number) => (
        <g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
          <line y2={innerHeight} stroke="red" />
          <text y={innerHeight} dy="1rem" style={{ textAnchor: 'middle' }}>
            {tickValue}
          </text>
        </g>
      ))}
    </>
  )
}