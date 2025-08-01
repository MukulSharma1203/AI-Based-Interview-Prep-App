
import Header from "@/components/header"
import Container from "@/components/container";
import { Outlet } from "react-router-dom"
import { Footer } from "@/components/footer";

function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
        {/*handler to store the user data*/}
        <Header/>
        <Container className="flex-grow">
          <main className="flex-grow">
            <Outlet/>
          </main>
        </Container>
           

        <Footer/>

    </div>
  )
}

export default MainLayout