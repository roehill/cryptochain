"use client";
import { useEffect, useState } from "react";
import styles from "./transactions.module.scss";
import axios from "@/utils/axios";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    await axios
      .get(`/panels/monitoring-panel/transactions?page=1&per_page=10`)
      .then((res) => {
        setTransactions(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent transactions</h2>
      <div className={styles.items} key="items">
        <p className={styles.walletAddress}>wallet address</p>
        <p className={styles.crypto}>crypto</p>
        <p className={styles.amount}>amount (usd)</p>
      </div>
      {transactions?.map((item) => (
        <div className={styles.transactionCard} key={item.key}>
          <p className={styles.walletAddress}>{item.address}</p>
          <p className={styles.crypto}>{item.address_type}</p>
          <p className={styles.amount}>{item.amount_usd.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
