import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

const MainLayout = ({children}) => {
  return (
    <>
      <main>
         <Navbar/>
         {children}
      </main>
    </>
  )
}

export default MainLayout
