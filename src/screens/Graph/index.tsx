import { useEffect, useMemo, useState } from 'react'

import * as d3 from 'd3'

type Data = d3.DSVRowArray<string>

export default function Page() {
  const [data, setData] = useState<Data | null>(null)

  const csvUrl = useMemo(() => {
    return 'https://gist.githubusercontent.com/JoseVitor-1337/0ed4da44865df494485926ce70e9aee1/raw/css-named-colors.csv'
  }, [])

  function handleGetMessageFromData(data: Data) {
    let message = ''

    message = message + Math.round(d3.csvFormat(data).length / 1024) + ' kb '
    message = message + data.length + ' rows '
    message = message + data.columns.length + ' columns'

    return message
  }

  useEffect(() => {
    d3.csv(csvUrl).then(setData)
  }, [csvUrl])

  return <div>Date is {data ? handleGetMessageFromData(data) : 'loading'}</div>
}
