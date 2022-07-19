import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useEffect, useState } from "react"
interface IInput {
    label?: any,
    type?: string,
    placeholder?: string,
    name?: string,
    onChange?(value: string): any,
    onFocus?(): any,
    onBlur?(): any,
    defaultValue?: string,
    [k: string]: any
}
const Input: FC<IInput> = function ({
    label,
    type = 'text',
    name = "",
    placeholder = '',
    onChange = () => { },
    onFocus = () => { },
    onBlur = () => { },
    defaultValue = '',
    ...rest
}) {
    const [CurrentType, setCurrentType] = useState(type)
    const [IsPassword, setIsPassword] = useState(type === 'password')
    const [Active, setActive] = useState(!!defaultValue || false)
    const [Value, setValue] = useState(defaultValue)

    useEffect(() => {
        defaultValue !== '' && setActive(true)
        setValue(defaultValue)
    }, [defaultValue])

    const onChangeInput = (e : any) => {
        setValue(e.target.value);
        onChange(e.target.value)
    }

    const onFocusInput = () => {
        onFocus()
        setActive(true)
    }
    const onBlurInput = () => {
        Value === '' && setActive(false)
        onBlur()
    }
    useEffect(() => {
        setCurrentType(IsPassword ? 'password' : 'text')
    }, [IsPassword])
    return (
        <>
            <div className="row-input" {...rest}>
                {
                    label && <div className="label">
                        <img src={label} alt="" />
                    </div>
                }
                <div className={`input-placeholder ${Active ? 'active' : ''}`}>
                <span className="placeholder">{placeholder}</span>
                <input
                    autoComplete="off"
                    onFocus={onFocusInput}
                    onBlur={onBlurInput}
                    onChange={onChangeInput}
                    name={name}
                    value={Value}
                    type={CurrentType} />
                {
                    type === 'password' ?
                        <div onClick={() => setIsPassword(!IsPassword)}  className="eye"><FontAwesomeIcon icon={!IsPassword ? faEyeSlash : faEye } /></div> :
                        null
                }
                
            </div>
        </div>
        </>
    )
}

export default Input