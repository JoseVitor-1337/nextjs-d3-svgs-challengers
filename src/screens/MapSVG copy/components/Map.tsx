import { memo } from 'react'

import { MapContainer, TileLayer, Polyline, Polygon } from 'react-leaflet'

import RoraimaSVGMap from '../roraima-svg-map.json'

type IMapProps = {
  center: [number, number]
}

function Map({ center }: IMapProps) {
  console.log('RoraimaSVGMap', RoraimaSVGMap)

  const purpleOptions = { color: 'black' }

  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ]

  return (
    <MapContainer
      style={{ height: '100%', width: '100%' }}
      center={center}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Polyline pathOptions={purpleOptions} positions={multiPolyline} />

      {RoraimaSVGMap.features.map(({ geometry, properties }) => {
        return (
          <Polygon
            key={properties.id}
            pathOptions={purpleOptions}
            positions={geometry.coordinates}
          />
        )
      })}
    </MapContainer>
  )
}

export default memo(Map)
