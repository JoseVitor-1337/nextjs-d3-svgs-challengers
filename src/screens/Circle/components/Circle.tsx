import { memo, useState, MouseEvent, useCallback } from 'react'

type IMousePosition = {
  x: number
  y: number
}

type ICircleProps = {
  width: number | string
  height: number | string
  radius?: number
}

function Circle({ width, height, radius = 30 }: ICircleProps) {
  const [mousePosition, setMousePosition] = useState<IMousePosition>({
    x: Number(width),
    y: Number(height),
  })

  const handleMouseMove = useCallback(
    (event: MouseEvent<SVGElement>) => {
      const { clientX, clientY } = event

      setMousePosition({ x: clientX, y: clientY })
    },
    [setMousePosition]
  )

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle cx={mousePosition.x} cy={mousePosition.y} r={radius} />
    </svg>
  )
}

export default memo(Circle)
