import { Home, Signin, Signup } from "Pages";
import { useEffect } from "react";
import { Route, Routes, } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import socket from "socket";
import { Chat, chat } from "store/actions/chatActions";
import { useAppDispatch } from "store/hooks";
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const handleChatData = (data : Chat) => {
      dispatch(chat(data))
    }
    socket.on('chat',handleChatData)
    return () => {
      socket.removeListener('chat' , handleChatData)
    }
  }, [dispatch])
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
