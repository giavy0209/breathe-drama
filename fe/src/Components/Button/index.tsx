import { FC, MouseEvent, ReactNode } from "react";

interface IButton {
  onClick?(event : MouseEvent<HTMLDivElement>) :any
  text ?: string,
  type? : 'primary' | 'warning' | 'danger' | 'transparent'
  children : ReactNode
}

const Button : FC<IButton> = ({
  onClick,
  type,
  children
}) => {

  return (
    <div onClick={onClick} className={`button ${type || 'primary'}`}>
      {children}
    </div>
  )
}

export default Button