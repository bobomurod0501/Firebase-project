import { toast } from "sonner";
import { useFiresrore } from "../hooks/useFiresrore";
import { useGlobalContexts } from "../hooks/useGlobalContexts";
import styles from "./TransactionForm.module.css";

import React from "react";

export const TransactionForm = () => {
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const { addDocument } = useFiresrore();
  const { user } = useGlobalContexts();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !price) return toast.error("Please fill in all fields");
    addDocument({ title, price: Number(price), uid:user.uid }, "transactions");
    setTitle("");
    setPrice("");
    e.target.reset();
  };
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <span>Title</span>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
          />
        </label>
        <label>
          <span>Price</span>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            value={price}
          />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
};
