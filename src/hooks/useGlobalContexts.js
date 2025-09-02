import { GlobalContext } from '../context/globalContext'
import { useContext } from 'react'

export const useGlobalContexts = () => {
const context = useContext(GlobalContext)
  return context
}
