import { useEffect, useState } from 'react'

import * as d3 from 'd3'

const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/UN_Population_2019.csv'

const width = 960
const height = 500

const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 200,
}

export default function Page() {
  const [data, setData] = useState<any>()

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.right - margin.left

  useEffect(() => {
    const row = (data: any) => {
      data.Population = +data['2020']
      return data
    }
    d3.csv(csvUrl, row).then((data: any) => {
      setData(data.slice(0, 10))
    })
  }, [csvUrl])

  if (!data) return <pre>Loading...</pre>

  const countrys: string[] = data.map((data) => data?.Country || '')

  const yScale = d3.scaleBand().domain(countrys).range([0, innerHeight])

  const domain: any = d3.max(data, (data: any) => data.Population)

  const xScale = d3.scaleLinear().domain([0, domain]).range([0, innerWidth])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {xScale.ticks().map((tickValue: number) => (
          <g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
            <line y2={innerHeight} stroke="red" />
            <text y={innerHeight} dy="1rem" style={{ textAnchor: 'middle' }}>
              {tickValue}
            </text>
          </g>
        ))}
        {yScale.domain().map((tickValue) => (
          <text
            key={tickValue}
            dx="-0.5rem"
            dy="0.5rem"
            style={{ textAnchor: 'end' }}
            y={yScale(tickValue) || 0 + yScale.bandwidth() / 2}
          >
            {tickValue}
          </text>
        ))}
        {data.map((data, index) => (
          <rect
            key={index}
            x={0}
            y={yScale(data.Country || '')}
            width={xScale(data.Population)}
            height={yScale.bandwidth()}
          />
        ))}
      </g>
    </svg>
  )
}
