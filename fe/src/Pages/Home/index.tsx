import callAPI from "callAPI"
import { Main } from "Layouts"
import { useEffect } from "react"
import { FC } from "react"

const Home: FC = () => {
  useEffect(() => {
    callAPI.get('/user')
    .then(res => {
      console.log(res);
      
    })
  },[])
  return (
    <>
      <Main>
        <h1>Home</h1>
      </Main>
    </>
  )
}
export default Home