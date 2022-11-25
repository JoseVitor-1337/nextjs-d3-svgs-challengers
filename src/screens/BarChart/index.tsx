import * as d3 from 'd3'

import useData from './hooks/useData'
import AxisBottom from './components/AxisBottom'
import AxisLeft from './components/AxisLeft'
import Marks from './components/Marks'

const width = 960
const height = 500

const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 200,
}

export default function Page() {
  const data = useData()

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.right - margin.left

  const yValue = (data) => data?.Country || ''
  const xValue = (data) => data?.Population || ''

  if (!data) return <pre>Loading...</pre>

  const countrys: string[] = data.map(yValue)

  const yScale = d3.scaleBand().domain(countrys).range([0, innerHeight])

  const domain: any = d3.max(data, xValue)

  const xScale = d3.scaleLinear().domain([0, domain]).range([0, innerWidth])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} />
        <AxisLeft yScale={yScale} />
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
        />
      </g>
    </svg>
  )
}
