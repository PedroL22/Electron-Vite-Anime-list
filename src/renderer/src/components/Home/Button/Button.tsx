import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  bgColor: string
  bgHover: string
  bgActive: string
}

export const Button = ({ name, bgColor, bgHover, bgActive, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`${bgColor} hover:${bgHover} active:${bgActive} select-none rounded-2xl px-12 py-8 text-5xl font-medium text-white transition-all`}
    >
      {name}
    </button>
  )
}
