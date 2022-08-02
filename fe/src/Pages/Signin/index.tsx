import callAPI from "callAPI";
import { FormFixed } from "Components";
import { useCallback } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { storage } from "utils";

const Signin: FC = () => {
  const navigate = useNavigate()
  const handleSubmit = useCallback(async (data: { [k: string]: any }) => {
    const res = await callAPI.post('/user/signin', data)
    toast(res.message)
    storage.setToken(res.data.token)
    navigate('/')
  }, [navigate])
  return (
    <>
      <FormFixed
        buttonText="Signin"
        link="/signup"
        linkText="Signup"
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

export default Signin