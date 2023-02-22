/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import renderer, { ReactTestInstance } from 'react-test-renderer'
import mainTheme from '../styles/themes/default'

/**
 * enzyme shallow render with styled components theme
 * @param {node} component
 * @param {object} theme
 */
export const shallowWithTheme = (component: JSX.Element, theme = mainTheme) =>
  shallow(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
    .dive()
    .dive()

/**
 * react test renderer with theme
 * @param {node} component
 * @param {object} theme
 */
export const renderWithTheme = (component: JSX.Element, theme = mainTheme) =>
  renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>).root

/**
 * react test renderer with theme
 * @param {node} component
 * @param {object} theme
 */
export const renderWithThemeWithoutRoot = (component: JSX.Element, theme = mainTheme) =>
  renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>)

/**
 * find by testId prop
 * @param {node} wrapper
 * @param {string} id
 */
export const findByTestId = (wrapper: ReactTestInstance, id: string) => wrapper.findByProps({ testID: id })

/**
 * find all instance with the given testId prop
 * @param {node} wrapper
 * @param {string} id
 */
export const findAllByTestId = (wrapper: ReactTestInstance, id: string) => wrapper.findAllByProps({ testID: id })
