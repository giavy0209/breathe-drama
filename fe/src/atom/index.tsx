import { FC, MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'

interface IButton {
  onClick?(event: MouseEvent<HTMLDivElement>): any
  text?: string
  type?: 'primary' | 'warning' | 'danger' | 'transparent'
  children: ReactNode
}

const Button: FC<IButton> = ({ onClick, type, children = 'Button' }) => {
  return (
    <ButtonStyled onClick={onClick} className={`button ${type || 'primary'}`}>
      {children}
    </ButtonStyled>
  )
}

export default Button

const ButtonStyled = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
  padding: 5px 10px;
`
