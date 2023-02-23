import React from 'react'
import { ButtonProps } from './types'
import * as S from './styles'

const Button = ({ variant = 'primary', size = 'medium', children, ...rest }: ButtonProps) => {
  return (
    <S.Button {...rest} variant={variant} size={size}>
      {children}
    </S.Button>
  )
}

export default Button
