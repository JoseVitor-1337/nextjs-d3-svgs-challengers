import Face from './components/Face'
import * as d3 from 'd3'

export default function ePage() {
  const height = 160
  const width = 160
  const strokeWidth = 10

  const eyeOffSetX = 30
  const eyeOffSetY = 30
  const eyeRadius = 10

  const mouthRadius = 40
  const mouthWidth = 10

  const array = d3.range(6 * 3)

  return (
    <div className="flex flex-wrap">
      {array.map(() => (
        <Face
          width={width}
          height={height}
          strokeWidth={strokeWidth + Math.random() * 2}
          eyeOffSetX={eyeOffSetX + Math.random() * 7}
          eyeOffSetY={eyeOffSetY + Math.random() * 5}
          eyeRadius={eyeRadius + Math.random() * 6}
          mouthRadius={mouthRadius + Math.random() * 7}
          mouthWidth={mouthWidth + Math.random() * 4}
        />
      ))}
    </div>
  )
}
