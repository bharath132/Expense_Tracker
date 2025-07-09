import React, { useState } from "react";
import "../style/Transaction.css";
import { TranscationItemsList } from "./TranscationItemsList";
import { TransactionItemAdder } from "./TransactionItemAdder";
import { useEffect } from "react";
import axios from "axios";
import LoadingCircle from "./LoadingCircle";
export const Transaction = () => {
  const [edit, setedit] = useState(true);
  const [transactionList, setTransactionList] = useState([]);
  const [loading, setLoading] = useState(true);
  function handleChildData(data) {
    setedit(data);
  }
  const fetchTransactions = async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/getTranscationList`
    );
    setTransactionList(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTransactions();
  }, [edit]);


  return (
    
      <div className="Transaction">
      <div className="title">
        <h1>Transaction</h1>
      </div>
      <div className="center-wrapper">
        <div className="Transaction_header">
          <button className="addbtn" onClick={() => setedit(false)}>
            + Add Transaction
          </button>
        </div>
      { loading ?  ( <LoadingCircle/> ) : ( edit ? (
          <TranscationItemsList transactions={transactionList} />
        ) : (
          <TransactionItemAdder sendDataToParent={handleChildData} />
        ))}
      </div>
    </div>
  );
};
