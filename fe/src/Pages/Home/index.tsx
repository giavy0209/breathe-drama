import { Counter } from 'features/counter/Counter'
import { Main } from 'Layouts'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <>
      <Main>
        <h1>Home</h1>
        <Counter />
      </Main>
    </>
  )
}
export default Home
