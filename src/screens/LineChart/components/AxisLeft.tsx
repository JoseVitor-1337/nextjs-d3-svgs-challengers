import { ScaleBand } from 'd3'

type IAxisLeftProps = {
  yScale: ScaleBand<string>
}

export default function AxisLeft({ yScale }: IAxisLeftProps) {
  return (
    <>
      {yScale.domain().map((tickValue) => (
        <g className="tick" key={tickValue}>
          <text
            dx="-0.5rem"
            dy="0.5rem"
            style={{ textAnchor: 'end' }}
            y={Number(yScale(tickValue)) + yScale.bandwidth() / 2}
          >
            {tickValue}
          </text>
        </g>
      ))}
    </>
  )
}
