import callAPI from 'callAPI'
import { Main } from 'Layouts'
import { FC, useCallback, useEffect } from 'react'
import socket from 'socket'
import { fetchChats } from 'store/actions/chatActions'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { selectChats, selectUser } from 'store/selectors'

const Home: FC = () => {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector(selectUser)
  console.log(currentUser);
  
  const chats = useAppSelector(selectChats)

  const handleSubmitForm = useCallback(async (e: any) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const content = form.get('content')
    socket.emit('chat', content)
    await callAPI.post('/chat', { content })
    e.target.reset()
  }, [])
  useEffect(() => {
    dispatch(fetchChats())
  }, [dispatch])
  return (
    <>
      <Main>
        <div id="home">
          <div className="chat-content">
            {
              chats.map(o => <div key={o._id} className={`item ${o.user?.username === currentUser.username ? 'my' : ''}`}>
                <div className="user">{o.user?.username}</div>
                <div className="content">
                  {o.content}
                </div>
              </div>)
            }
          </div>
          <div className="input">
            <form onSubmit={handleSubmitForm}>
              <input placeholder='Enter your text' name='content' type="text" />
            </form>
          </div>
        </div>
      </Main>
    </>
  )
}
export default Home
