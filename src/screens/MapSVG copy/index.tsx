import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./components/Map'), {
  ssr: false,
})

export default function MapSVG() {
  return (
    <div className="w-screen h-screen">
      <Map center={[2.8329234, -60.7101234]} />
    </div>
  )
}
