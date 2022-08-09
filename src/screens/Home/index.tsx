import FaceContainer from './components/FaceContainer'
import BackgroundCircle from './components/BackgroundCircle'
import Eyes from './components/Eyes'
import Mouth from './components/Mouth'

export default function HappyFacePage() {
  const height = 500
  const width = 960
  const strokeWidth = 10

  const centerY = height / 2

  const eyeOffSetX = 100
  const eyeOffSetY = 100
  const eyeRadius = 50

  const mouthRadius = 140
  const mouthWidth = 20

  return (
    <>
      <FaceContainer width={width} height={height}>
        <BackgroundCircle
          radius={centerY - strokeWidth / 2}
          strokeWidth={strokeWidth}
        />

        <Eyes
          eyeOffSetX={eyeOffSetX}
          eyeOffSetY={eyeOffSetY}
          eyeRadius={eyeRadius}
        />

        <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
      </FaceContainer>
    </>
  )
}
