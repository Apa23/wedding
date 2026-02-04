import React from 'react'
import './__styles__/Button.css'

type ButtonProps = {
  label: string
  id?: string
  variant?: 'primary' | 'secondary' | 'dark'
  className?: string
  route?: string
  icon?: React.ReactNode
  onClick?: () => void
}

const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return (
    <a href={props.route} target="_blank" id={props.id}>
      <button
        className={`${
          props.className
            ? props.className
            : 'flex justify-center items-center gap-1 mt-4'
        } ${variant}`}
      >
        {props.label}
        {props.icon}
      </button>
    </a>
  )
}

export default Button
