"use client";

import styles from "./transaction.module.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "@/utils/axios";
import moment from "moment";

const Transaction = () => {
  const [transaction, setTransaction] = useState([]);
  const params = useParams();

  const getTransaction = async () => {
    await axios
      .get(`/search/transactions?tx_hash=${params.hash}`)
      .then((res) => {
        console.log(res.data.transactions[0]);
        setTransaction(res.data.transactions[0]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.informations}>
        <div>
          <span>transaction hash</span>
          <p>{transaction.tx_hash}</p>
        </div>
        <div>
          <span>blockchain</span>
          <p>{transaction.blockchain}</p>
        </div>
        <div>
          <span>transaction time</span>
          <p>
            {moment(transaction.transaction_time).format(
              "MMMM Do YYYY, h:mm:ss"
            )}
          </p>
        </div>
        <div>
          <span>total transaction value usd</span>
          <p>{transaction.total_transaction_value_usd}</p>
        </div>
      </div>
      <div className={styles.transfers}>
        <h3>Transfers</h3>
        <div className={styles.header}>
          <div>
            <span>SENDERS</span>
          </div>
          <div>
            <span>RECIPIENTS</span>
          </div>
        </div>
        <div className={styles.itemsName}>
          <div>
            <span>ADDRESS</span>
            <span>AMOUNT</span>
          </div>
          <div>
            <span>ADDRESS</span>
            <span>AMOUNT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
