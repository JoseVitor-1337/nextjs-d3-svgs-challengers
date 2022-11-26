import * as d3 from 'd3'

import useData from './hooks/useData'
import AxisBottom from './components/AxisBottom'
import AxisLeft from './components/AxisLeft'
import Marks from './components/Marks'

const width = 960
const height = 500
const xAxisLabelOffset = 60
const xAxisTickFormat = (value) => d3.format('.2s')(value).replace('G', 'B')
const margin = {
  top: 80,
  right: 80,
  bottom: 80,
  left: 250,
}

export default function Page() {
  const data = useData()

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.right - margin.left

  const yValue = (data: any) => data?.Country || ''
  const xValue = (data: any) => data?.Population || ''

  if (!data) return <pre>Loading...</pre>

  const countrys: string[] = data.map(yValue)

  const yScale = d3
    .scaleBand()
    .domain(countrys)
    .range([0, innerHeight])
    .paddingInner(0.25)

  const domain: any = d3.max(data, xValue)

  const xScale = d3.scaleLinear().domain([0, domain]).range([0, innerWidth])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          Population
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  )
}
