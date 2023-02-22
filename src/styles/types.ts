import { ReactElement } from 'react'
import { DefaultTheme } from 'styled-components'

export type StylesProps = {
  children: ReactElement
  theme?: DefaultTheme
}

export type DefaultThemeProps = {
  colors: {
    primaries: {
      cyan: string
      blue: string
      pink: string
    }
    secondaries: {
      red: string
      yellow: string
    }
    neutral: {
      gray0: string
      gray1: string
      gray2: string
      gray3: string
      gray4: string
      gray5: string
      gray6: string
      gray7: string
      gray8: string
      gray9: string
      white: string
    }
  }
  fonts: {
    sizes: {
      fontSizeXXXS: string
      fontSizeXXS: string
      fontSizeXS: string
      fontSizeSM: string
      fontSizeMD: string
      fontSizeLG: string
      fontSizeXL: string
      fontSizeXXL: string
      fontSizeXXXL: string
    }
    weights: {
      fontWeightNormal: string
      fontWeightLight: string
      fontWeightRegular: string
      fontWeightMedium: string
      fontWeightSemiBold: string
      fontWeightBold: string
      fontWeightExtraBold: string
      fontWeightHeavy: string
    }
  }
}
