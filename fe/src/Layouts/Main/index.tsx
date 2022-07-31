import { Footer, Header, Sidebar } from "Components";
import { useEffect } from "react";
import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser, fetchUsers } from "store/actions/userActions";
import { useAppDispatch } from "store/hooks";
import { storage } from "utils";

const Main: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => {
    const jwt = storage.getToken()
    if (!jwt) {
      navigate('/signin')
    }else {
      dispatch(fetchUsers())
      dispatch(fetchUser())
    }
  }, [navigate,dispatch])
  return (
    <>
      <div id="main-layout">
        <Header />
        <main>
          <Sidebar />
          <section>
            {children}
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Main