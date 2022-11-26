import { ScaleLinear } from 'd3'

type IMarksProps = {
  data: any[]
  yScale: ScaleLinear<number, number, never>
  xScale: ScaleLinear<number, number, never>
  xValue: any
  yValue: any
  circleRadius?: number
}

export default function Marks({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  circleRadius = 10,
}: IMarksProps) {
  return (
    <>
      {data.map((data, index) => (
        <circle
          key={index}
          className="mark"
          cx={xScale(xValue(data))}
          cy={yScale(yValue(data))}
          r={circleRadius}
        >
          <title>{xValue(data)}</title>
        </circle>
      ))}
    </>
  )
}
