import { Home } from "../pages/Home"
import Login from "../pages/Login"
import Route from "../pages/Route"
import { SignUp } from "../pages/SignUp"
import { ProtectedRoutes } from "../components/ProtectedRoutes"
import { Navigate } from "react-router-dom"
import { useGlobalContexts } from "../hooks/useGlobalContexts"



 export const useRoutes = () => {
   const {user} = useGlobalContexts()
   const routes = [
      {
         path: "/",
         element: <ProtectedRoutes user={user}>
            <Route />
         </ProtectedRoutes>,
         children: [
            {
               index: true,
               element: <Home />,
            }
         ],
      },
      ,
      {
         path: "/signup",
         element: user ? <Navigate to={"/"} /> : <SignUp />,
      },
      {
         path: "/login",
         element: user ? <Navigate to={"/"} /> : <Login />,
      },
   ]
   return routes
}
