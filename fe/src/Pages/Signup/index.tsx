import callAPI from "callAPI";
import { FormFixed } from "Components";
import { useCallback } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup: FC = () => {
  const navigate = useNavigate()
  const handleSubmit = useCallback(async (data: { [k: string]: any }) => {
    const res = await callAPI.post('/user/signup', data)
    toast(res.message)
    navigate('/signin')
  }, [navigate])
  return (
    <>
      <FormFixed
        buttonText="Signup"
        link="/signin"
        linkText="Signin"
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

export default Signup