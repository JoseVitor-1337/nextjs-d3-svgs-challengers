import FaceContainer from './components/FaceContainer'
import BackgroundCircle from './components/BackgroundCircle'
import Eyes from './components/Eyes'
import Mouth from './components/Mouth'

type IFaceProps = {
  height: number
  width: number
  strokeWidth: number
  eyeOffSetX: number
  eyeOffSetY: number
  eyeRadius: number
  mouthRadius: number
  mouthWidth: number
}

export default function HappyFace({
  height,
  width,
  strokeWidth,
  eyeOffSetX,
  eyeOffSetY,
  eyeRadius,
  mouthRadius,
  mouthWidth,
}: IFaceProps) {
  return (
    <>
      <FaceContainer width={width} height={height}>
        <BackgroundCircle
          radius={height / 2 - strokeWidth / 2}
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
