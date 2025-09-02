import { useGlobalContexts } from "../hooks/useGlobalContexts"
export const useContextFunction = () => {
   const {user} = useGlobalContexts()
  return user
}
