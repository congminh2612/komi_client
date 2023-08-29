'use client'
import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon, IconTypes } from '../icon'

/* eslint-disable react/display-name */
interface BaseInputProps {
  id?: string
  fullWidth?: boolean
  className?: string
  error?: string
  spacing?: string
  icon?: IconTypes
  iconClass?: string
  handleIconClick?(): void
  placeholder?: string
}

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  BaseInputProps
const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      fullWidth,
      className,
      spacing,
      disabled,
      id,
      icon,
      iconClass,
      placeholder,
      handleIconClick = () => {},
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx(spacing ? '' : 'space-x-2', fullWidth && 'w-full')}>
        <div className="relative">
          <input
            id={id}
            ref={ref}
            type="text"
            placeholder={placeholder}
            className={twMerge(
              'border border-gray-400 p-[12px] outline-none  rounded-lg bg-gray-200',
              !disabled &&
                ' hover:border-neutral-600 focus:border-neutral-500 focus:bg-white',
              fullWidth && 'w-full',
              className
            )}
            {...props}
          />
          {icon && (
            <Icon
              onClick={handleIconClick}
              size="24px"
              className={twMerge(
                'absolute right-[10.5px] top-1/2 -translate-y-1/2 text-neutral-700 cursor-pointer',
                iconClass
              )}
              icon={icon}
            />
          )}
        </div>
      </div>
    )
  }
)

export default TextInput
