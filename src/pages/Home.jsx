import styles from './Home.module.css'
import { useCollection } from '../hooks/useCollection'
import { TransactionsList } from '../components/TransactionsList'
import { TransactionForm } from '../components/TransactionForm'
import {useGlobalContexts} from '../hooks/useGlobalContexts'



export const Home = () => {
  const {user} = useGlobalContexts();

  const { data: transactions } = useCollection("transactions", [
    "uid",
    "==",
    user.uid,
  ]);


  return (
    <div className={`${styles.home} container`}>
      {transactions && <TransactionsList transactions={transactions}/>}
      <div>
        <h2>Add new transaction:</h2>
        <TransactionForm/>
      </div>
    </div>
  )
}
