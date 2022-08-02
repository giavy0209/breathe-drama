import { Form } from "antd";
import callAPI from "callAPI";
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
      <Form>
        
      </Form>
    </>
  )
}

export default Signin