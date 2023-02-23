import styled, { css } from 'styled-components'
import { DefaultThemeProps } from '../../styles/types'
import colorWithAlpha from '../../utils/colorWithAlpha'

type ButtonVariants = 'primary' | 'secondary'
type ButtonSizes = 'small' | 'medium' | 'large'
type ButtonStyles = {
  variant: ButtonVariants
  size: ButtonSizes
}

type ThemedProps = {
  theme: DefaultThemeProps
}

const buttonSizes = {
  small: ({ theme }: ThemedProps) => css`
    padding: 0.5rem 1rem;
    font-size: ${theme.fonts.sizes.fontSizeSM};
  `,
  medium: ({ theme }: ThemedProps) => css`
    padding: 0.75rem 1.25rem;
    font-size: ${theme.fonts.sizes.fontSizeMD};
  `,
  large: ({ theme }: ThemedProps) => css`
    padding: 1.125rem 1.5rem;
    font-size: ${theme.fonts.sizes.fontSizeLG};
  `,
}

export const colorVariants = {
  primary: ({ theme }: ThemedProps) => css`
    background-color: ${theme.colors.primaries.cyan};
    color: ${theme.colors.neutral.white};
    border-color: ${theme.colors.primaries.cyan};

    &:hover:enabled {
      background-color: ${colorWithAlpha(theme.colors.primaries.cyan, 0.5)};
    }

    &:focus:enabled,
    &.focus:enabled,
    &:active:enabled,
    &.active:enabled {
      background-color: ${colorWithAlpha(theme.colors.primaries.cyan, 0.5)};
    }
  `,
  secondary: ({ theme }: ThemedProps) => `
    background-color: ${theme.colors.primaries.blue};
    color: ${theme.colors.neutral.white};
    border-color: ${theme.colors.primaries.blue};

    &:hover:enabled {
        background-color: ${colorWithAlpha(theme.colors.primaries.blue, 0.5)};
      }
  
      &:focus:enabled,
      &.focus:enabled,
      &:active:enabled,
      &.active:enabled {
        background-color: ${colorWithAlpha(theme.colors.primaries.blue, 0.5)};
      }
  `,
}

export const Button = styled.button<ButtonStyles>`
  display: inline-block;
  font-variant: normal;
  font-style: normal;
  font-weight: ${(props) => props.theme.fonts.weights.fontWeightMedium};
  font-family: Quicksand;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  border-radius: 4px;
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid transparent;
  outline: none;

  &:not(:disabled) {
    cursor: pointer;
  }

  ${({ size }) => buttonSizes[size]}
  ${({ variant }) => colorVariants[variant]}
`
