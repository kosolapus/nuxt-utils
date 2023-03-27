import { luminance } from '@module/utils/luminance'
import { RGB } from '@module/types/rgb.type'

export function contrast(rgb1: RGB, rgb2: RGB) {
  const lum1 = luminance(rgb1[0], rgb1[1], rgb1[2])
  const lum2 = luminance(rgb2[0], rgb2[1], rgb2[2])
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  return (brightest + 0.05) / (darkest + 0.05)
}
