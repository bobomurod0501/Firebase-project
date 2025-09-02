import styles from './TransactionsList.module.css'
import { FaTrash } from "react-icons/fa";
import { useFiresrore } from '../hooks/useFiresrore';

// eslint-disable-next-line react/prop-types
export const TransactionsList = ({transactions}) => {
const {deleteDocument} = useFiresrore()
  return (
    <div>
      {
         // eslint-disable-next-line react/prop-types
         transactions.map((transaction) => {
            const {id, title, price} = transaction
            return (
              <div key={id} className={styles.card}>
                <h4>{title}</h4>
                <p>${price}</p>
                <span onClick={() => deleteDocument(id, "transactions")} className={styles.trash}>
                  <FaTrash />
                </span>
              </div>
            );
         })
      }
    </div>
  )
}
