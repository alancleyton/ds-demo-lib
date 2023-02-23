import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size: 'small' | 'medium' | 'large'
} & ButtonHTMLAttributes<HTMLButtonElement>
