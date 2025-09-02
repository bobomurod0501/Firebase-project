import { Navigate } from "react-router-dom"


export const ProtectedRoutes = ({user, children}) => {
   if(user){
      return children
   }else{
      return <Navigate to="/signup"/>
   }
}
