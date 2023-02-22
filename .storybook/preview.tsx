import React from 'react';
import { themes } from '@storybook/theming'
import { StylesProvider } from '../src'
import  theme from '../src/styles/themes/default';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark
  }
};


const themeDecorator = storyFn => <StylesProvider theme={theme}>
  {storyFn()}
</StylesProvider>
export const decorators = [themeDecorator];
