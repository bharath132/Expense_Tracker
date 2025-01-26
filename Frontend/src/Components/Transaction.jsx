import React, { useState } from "react";
import "../style/Transaction.css";
import { TranscationItemsList } from "./TranscationItemsList";
import { TransactionItemAdder } from "./TransactionItemAdder";
export const Transaction = () => {
  const [edit,setedit]=useState(true)
  function handleChildData(data){
    setedit(data)
  }
  return (
    <div className="Transaction">
      <div className="title">
        <h1>Transaction</h1>
      </div>
      <div className="center-wrapper">
        <div className="Transaction_header">
          <button className="addbtn" onClick={()=>setedit(false)}>+ Add Transaction</button>
        </div>
        {edit ? <TranscationItemsList/>:<TransactionItemAdder sendDataToParent={handleChildData}/>}
      </div>
    </div>
  );
};
