import { createContext } from "react";
import { useReducer, useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext()

const changeState = (state, action) => {
   const {type, payload} = action
   switch(type){
      case "LOGIN":
         return {...state, user: payload}
      case "LOGOUT":
         return {...state, user: null}
      default:
         return state
   }
}
// eslint-disable-next-line react/prop-types
export const GlobalContextProvider = ({children}) => {
const [state, dispatch] = useReducer(changeState, {})

useEffect(() => {
   onAuthStateChanged(auth, (user) => {
      dispatch({type:"LOGIN", payload: user})
   })
}, [])

  return (
    <GlobalContext.Provider value={{...state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}
