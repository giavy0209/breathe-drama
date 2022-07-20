import { useCallback, FC, FormEvent } from 'react'
import { Input } from 'Components'
import { Link } from 'react-router-dom'
interface IInput {
  label?: any,
  name: string,
  placeholder?: string,
  type: string
}

interface IForm {
  listInput: IInput[],
  buttonText: string,
  onSubmit(formvalue?: { [k: string]: any }): any
  link : string,
  linkText : string
}

const Form: FC<IForm> = function ({
  listInput,
  buttonText,
  link,
  linkText,
  onSubmit,
}) {
  const handleSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const submitData: { [k: string]: any } = {}
    for (let field of formData) {
      submitData[field[0]] = field[1]
    }
    onSubmit(submitData)

  }, [onSubmit])
  return (
    <>
      <div className="container-fixed">
        <div className="container form">
          <form onSubmit={handleSubmitForm}>
            {
              listInput.map(o => <Input key={o.name} label={o.label} name={o.name} placeholder={o.placeholder} type={o.type} />)
            }
            <button type='submit'>{buttonText}</button>
          </form>
          <Link className='link' to={link}>{linkText}</Link>
        </div>
      </div>
    </>
  )
}

export default Form