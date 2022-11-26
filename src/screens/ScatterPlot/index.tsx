import * as d3 from 'd3'

import useData from './hooks/useData'
import AxisBottom from './components/AxisBottom'
import AxisLeft from './components/AxisLeft'
import Marks from './components/Marks'

const width = 960
const height = 500
const xAxisLabel = 'Sepal Length'
const yAxisLabel = 'Sepal Width'
const xAxisLabelOffset = 60
const yAxisLabelOffset = 60
const circleRadius = 7
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

  const xValue = (data: any) => data.sepal_length || ''
  const yValue = (data: any) => data.sepal_width || ''

  if (!data) return <pre>Loading...</pre>

  const extendxValue: any = d3.extent(data, xValue)
  const extendyValue: any = d3.extent(data, yValue)

  const xScale = d3
    .scaleLinear()
    .domain(extendxValue)
    .range([0, innerWidth])
    .nice()

  const yScale = d3.scaleLinear().domain(extendyValue).range([0, innerHeight])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset}, ${
            innerHeight / 2
          }) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft innerWidth={innerWidth} yScale={yScale} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>

        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          circleRadius={circleRadius}
        />
      </g>
    </svg>
  )
}
