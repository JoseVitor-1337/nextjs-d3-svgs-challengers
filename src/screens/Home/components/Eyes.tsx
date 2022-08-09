import { memo } from 'react'

type IEyesProps = {
  eyeOffSetX: number
  eyeOffSetY: number
  eyeRadius: number
}

function Eyes({ eyeOffSetX, eyeOffSetY, eyeRadius }: IEyesProps) {
  return (
    <>
      <circle cx={-eyeOffSetX} cy={-eyeOffSetY} r={eyeRadius} />

      <circle cx={eyeOffSetX} cy={-eyeOffSetY} r={eyeRadius} />
    </>
  )
}

export default memo(Eyes)
