import { useNavigate } from 'react-router'
import { useCallback, FC, FormEvent } from 'react'
import { toast } from 'react-toastify'
import { Input } from 'Components'
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

}

const Form: FC<IForm> = function ({
  listInput,
  buttonText,
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
        </div>
      </div>
    </>
  )
}

export default Form