import { ScaleBand, ScaleLinear } from 'd3'

type IMarksProps = {
  data: any[]
  yScale: ScaleBand<string>
  xScale: ScaleLinear<number, number, never>
  xValue: any
  yValue: any
}

export default function Marks({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
}: IMarksProps) {
  return (
    <>
      {data.map((data) => (
        <rect
          key={yValue(data)}
          x={0}
          y={yScale(yValue(data))}
          width={xScale(xValue(data))}
          height={yScale.bandwidth()}
        />
      ))}
    </>
  )
}
