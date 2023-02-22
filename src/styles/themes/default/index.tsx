import { DefaultThemeProps } from '../../types'
import { primaries, secondaries, neutral } from '../tokens/colors'
import { sizes, weights } from '../tokens/fonts'

const theme: DefaultThemeProps = {
  colors: {
    primaries,
    secondaries,
    neutral,
  },
  fonts: {
    sizes,
    weights,
  },
}

export default theme
