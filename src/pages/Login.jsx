import React from "react";
import styles from "./Auth.module.css";
import { useLogin } from '../hooks/useLogin';
import { Link } from "react-router-dom";




const Login = () => {
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const {login} = useLogin();

const handleSubmit = (e) => {
    e.preventDefault();
    login( email, password );
    setEmail("");
    setPassword("");
    e.target.reset();
  }
  const isLoading = true;
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Login</h1>

        <label>
          <span>Email</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <div className={styles.btn}>
          <p>
            Are you new:
            <Link to={"/signup"}>Signup</Link>
          </p>
          {isLoading && <button>Login</button>}
          {!isLoading && (
            <button disabled className={styles.disabeled}>
              Loading...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
