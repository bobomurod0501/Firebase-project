import {  signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContexts } from "./useGlobalContexts";
import { toast } from "sonner";

export const useSignout = () => {
   const {dispatch} = useGlobalContexts();
   const signout = () => {
      signOut(auth).then(() => {
         dispatch({type: "LOGOUT"});
         toast.success("Signout successful")
      }).catch((error) => {
         toast.error("Error: " + error.message)
      });
};
return {signout}
}
