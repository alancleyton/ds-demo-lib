import React from 'react'
import { ThemeProvider } from 'styled-components'
import mainTheme from './themes/default'
import { GlobalStyle } from './global'
import { StylesProps } from './types'

const StylesProvider = ({ children, theme = mainTheme }: StylesProps) => (
  <ThemeProvider theme={theme}>
    <>
      {children}
      <GlobalStyle />
    </>
  </ThemeProvider>
)

export default StylesProvider
