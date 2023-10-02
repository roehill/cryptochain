"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./transactionsList.module.scss";
import axios from "@/utils/axios";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const router = useRouter();

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
        <div
          onClick={() => router.push(`/transactions/${item.tx_hash}`)}
          className={styles.transactionCard}
          key={item.key}
        >
          <p className={styles.walletAddress}>{item.address.slice(0, 30)}...</p>
          <p className={styles.crypto}>{item.address_type}</p>
          <p className={styles.amount}>
            {item.amount_usd.toLocaleString()} <span>(USD)</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
