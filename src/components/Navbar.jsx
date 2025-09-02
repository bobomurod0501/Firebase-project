import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"
import { useGlobalContexts } from '../hooks/useGlobalContexts';
import { useSignout } from '../hooks/useSignout';


export const Navbar = () => {
const {user} = useGlobalContexts();
const {signout} = useSignout();
   // const user = false;
   return (
      <header className={styles.header}>
         <div className='container'>
            <NavLink className={styles.logo} to="/">
               myMoney
            </NavLink>
         {
            user &&(
               <div className={styles.avatar}>
                  <span>Hello {user.email}</span>
                  <img src="https:/picsum.photos/400" alt="" />
                     <button onClick={signout}>Log out</button>
               </div>
            )
         }
            {!user && (
               <nav>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/signup">Sign up</NavLink>
               </nav>
            )}
         </div>
      </header>
   )
}
