import React from 'react'
import './__styles__/Button.css'

type ButtonProps = {
  label: string
  route: string
  icon?: React.ReactNode
  target?: HTMLAnchorElement['target']
}

const Button = (props: ButtonProps) => {
  return (
    <a href={props.route} target={props.target}>
      <button
        className='flex justify-center items-center gap-1'
      >
        {props.label}
        {props.icon}
      </button>
    </a>
  )
}

export default Button
