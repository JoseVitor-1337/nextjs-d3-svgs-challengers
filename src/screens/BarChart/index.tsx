import { useEffect, useState } from 'react'

import * as d3 from 'd3'

type Data = d3.DSVRowArray<string>

const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/UN_Population_2019.csv'

const width = 960
const height = 500

const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
}

export default function Page() {
  const [data, setData] = useState<Data>()

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.right - margin.left

  useEffect(() => {
    const row = (data) => {
      data.Population = +data['2020']
      return data
    }
    d3.csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10))
    })
  }, [csvUrl])

  if (!data) return <pre>Loading...</pre>

  const countrys: string[] = data.map((data) => data?.Country || '')

  const yScale = d3.scaleBand().domain(countrys).range([0, innerHeight])

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (data) => data.Population || 0)])
    .range([0, innerWidth])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {data.map((data) => (
          <rect
            x={0}
            y={yScale(data.Country || '')}
            width={xScale(data.Population || 0)}
            height={yScale.bandwidth()}
          />
        ))}
      </g>
    </svg>
  )
}
