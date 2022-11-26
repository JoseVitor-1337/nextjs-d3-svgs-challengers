import { ScaleBand, ScaleLinear } from 'd3'

type IMarksProps = {
  data: any[]
  yScale: ScaleBand<string>
  xScale: ScaleLinear<number, number, never>
  xValue: any
  yValue: any
  tooltipFormat: (value: string) => string
}

export default function Marks({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
}: IMarksProps) {
  return (
    <>
      {data.map((data) => (
        <rect
          className="mark"
          key={yValue(data)}
          x={0}
          y={yScale(yValue(data))}
          width={xScale(xValue(data))}
          height={yScale.bandwidth()}
        >
          <title>{tooltipFormat(xValue(data))}</title>
        </rect>
      ))}
    </>
  )
}
