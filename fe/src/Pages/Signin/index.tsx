import callAPI from "callAPI";
import { Form } from "Components";
import { useCallback } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { storage } from "utils";

const Login: FC = () => {
  const navigate = useNavigate()
  const handleSubmit = useCallback(async (data: { [k: string]: any }) => {
    const res = await callAPI.post('/user/signin', data)
    toast(res.message)
    storage.setToken(res.data.token)
    navigate('/')
  }, [])
  return (
    <>
      <Form
        buttonText="Login"
        listInput={[
          {
            name: "username",
            type: "text",
            placeholder: "User name"
          },
          {
            name: "password",
            type: "password",
            placeholder: "Password"
          }
        ]}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default Login