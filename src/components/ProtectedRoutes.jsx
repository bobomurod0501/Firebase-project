import { Navigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export const ProtectedRoutes = ({user, children}) => {
   if(user){
      return children
   }else{
      return <Navigate to="/login"/>
   }
}
