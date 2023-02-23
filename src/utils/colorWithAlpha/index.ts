// @ts-nocheck
import tinycolor from 'tinycolor2'

const cache = {}

const cacheKey = (color: string, alpha: number) => `${color}-${alpha}`

function colorWithAlpha(color: string, alpha: number) {
  const key = cacheKey(color, alpha)

  if (!(key in cache)) {
    cache[key] = tinycolor(color).setAlpha(alpha).toString()
  }

  return cache[key]
}

export default colorWithAlpha
