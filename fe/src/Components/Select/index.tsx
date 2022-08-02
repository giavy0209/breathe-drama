import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Children, FC, isValidElement, ReactNode, useCallback, useState } from "react";

interface IOption {
  value: string,
  children: ReactNode
}
interface ISelect {
  disable?: boolean
  placehoder?: string
  name: string,
  options : IOption[]
  children: ReactNode
}
const Select: FC<ISelect> = ({
  disable = false,
  placehoder = "Select",
  name,
  children
}) => {
  const [ShowSelect , setShowSelect] = useState(false)
  const [Value, setValue] = useState(placehoder)
  const handleShowSelect = useCallback(() => {
    setShowSelect(!ShowSelect)
  },[ShowSelect])

  const handleChangeSelect = useCallback(() => {

  },[])
  
  return (
    <div onClick={handleShowSelect} className={`select ${disable ? 'disable' : ''}`}>
      {Value}
      <div className="icon"><FontAwesomeIcon icon={faChevronDown} /></div>
      <div className={`options ${ShowSelect ? 'show' : ''}`}>
        {children}
      </div>
      <div className="hidden-select">
        <select name={name} >
          {Children.map(children, child => {
            if (!isValidElement(child)) {
              return child;
            }
            if (child.props) {
              return <option value={child.props.value}></option>
            }
          })}

        </select>
      </div>
    </div>
  )
}

export default Select

export const Option : FC<IOption> = () => {
  return (
    <>
    
    </>
  )
}