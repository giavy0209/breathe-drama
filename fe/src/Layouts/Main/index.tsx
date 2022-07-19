import { Footer, Header, Sidebar } from "Components";
import { FC, PropsWithChildren } from "react";

const Main: FC<PropsWithChildren> = ({ children }) => {
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