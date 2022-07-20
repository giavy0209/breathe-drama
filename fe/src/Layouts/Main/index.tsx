import callAPI from "callAPI";
import { Footer, Header, Sidebar } from "Components";
import { useEffect } from "react";
import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "utils";

const Main: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()
  useEffect(() => {
    const jwt = storage.getToken()
    if (!jwt) {
      navigate('/signin')
    } else {
      callAPI.get('/user')
        .then(res => {
          console.log(res);
        })
    }
  }, [])
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