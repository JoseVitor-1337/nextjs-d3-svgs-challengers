import { useEffect, useState } from 'react'
import * as d3 from 'd3'

const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/UN_Population_2019.csv'

export default function useData() {
  const [data, setData] = useState<any>()

  useEffect(() => {
    const row = (data: any) => {
      data.Population = +data['2020'] * 1000
      return data
    }
    d3.csv(csvUrl, row).then((data: any) => {
      setData(data.slice(0, 10))
    })
  }, [csvUrl])

  return data
}
