import React from "react";
import styles from "./Auth.module.css";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [displayName, setDisplayName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(displayName, email, password);
    setDisplayName("");
    setEmail("");
    setPassword("");
    e.target.reset();
  };
  const isLoading = true;
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Sign Up</h1>
        <label>
          <span>Display name</span>
          <input
            onChange={(e) => setDisplayName(e.target.value)}
            type="text"
            value={displayName}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          />
        </label>
        <div className={styles.btn}>
          <p>
            Already have account:
            <Link to={"/login"}>Login</Link>
          </p>
          {isLoading && <button>Sign Up</button>}
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
