import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { alignStyle, sizeStyle, variantStyle, weightStyle } from './constants'
interface TypographyProps {
  variant?: keyof typeof variantStyle
  align?: keyof typeof alignStyle
  children: React.ReactNode
  size?: keyof typeof sizeStyle
  weight?: keyof typeof weightStyle
  onClick?(): void
  className?: string
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'eyebrow',
  children,
  align = 'left',
  size,
  weight = 'normal',
  onClick = null,
  className = ''
}) => {
  const listHeadingNames = ['h1', 'h2', 'h3', 'h4', 'h5']

  const Component = React.createElement(
    listHeadingNames.includes(variant) ? variant : 'p',
    {
      className: twMerge(
        clsx(
          alignStyle[align],
          weightStyle[weight],
          variantStyle[variant],
          size && sizeStyle[size],
          onClick && 'cursor-pointer',
          'text-neutral-900'
        ),
        className
      ),
      onClick
    },
    children
  )
  return Component
}

export default Typography
