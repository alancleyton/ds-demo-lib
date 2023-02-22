// import original module declarations
import 'styled-components'
import { DefaultThemeProps } from '../types'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeProps {}
}
