export function Point(x = 0, y = 0) {
  const moveBy = (dx: number, dy: number) => {
    x += dx
    y += dy
  }

  const distanceFromOrigin = () => Math.sqrt(x * x + y * y)

  return { moveBy, distanceFromOrigin }
}
