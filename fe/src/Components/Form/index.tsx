import { EventHandler, FC, FormEvent, LegacyRef, ReactNode, useCallback, useRef } from "react";

interface IForm {
  onSubmit(data : {[k : string] : any}): any
  children : ReactNode
}

const Form: FC<IForm> = ({onSubmit,children}) => {
  const form = useRef<HTMLFormElement>(null)
  const handleSubmitForm = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(form.current as HTMLFormElement)
    const submitData: { [k: string]: any } = {}
    for (let field of formData) {
      submitData[field[0]] = field[1]
    }
    onSubmit(submitData)
  }, [])
  return (
    <form onSubmit={handleSubmitForm} ref={form} >
      {children}
    </form>
  )
}

export default Form