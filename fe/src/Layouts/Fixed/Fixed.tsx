import { FC, ReactNode } from "react";

interface IFixed {
  children: ReactNode
}

const Fixed: FC<IFixed> = ({ children }) => {
  return (
    <div className="container-fixed">
      {children}
    </div>
  )
}
export default Fixed