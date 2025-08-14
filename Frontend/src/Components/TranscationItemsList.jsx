import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
export const TranscationItemsList = ({ sendDataToParent , EditData }) => {
  const [transactions, setTransactions] = useState([]);
  const refresh = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/getTranscationList`)
      .then((res) => {
        // Assuming res.data is the transaction list
        setTransactions(res.data); // Update the transactions state with the fetched data
        // You can set the transactions state here if needed
      })
      .catch((err) => {
        console.error("Error fetching transaction list:", err);
      });
  };
  useEffect(() => {
    refresh();
  }, []);
  const HanleEdit = (list) => {
    // Implement the edit functionality here
    console.log("Edit transaction with ID:", list);
    // You can set the state to show an edit form or redirect to an edit page
    EditData(list);
    sendDataToParent(false); // Assuming this will toggle the view to the adder component
  };
  const HanleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/deleteTranscationList`, {
        data: { id: id },
      })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        refresh();
        // Optionally, you can refresh the transaction list here
      });
  };
  return (
    <div className="Transactiom--con">
      {transactions.map((list, index) => (
        <div className="Transactiom--table" key={index}>
          <div className="trans-item">
            <div className="Trans-info">
              <h6>{new Date(list.date).toLocaleDateString()}</h6>
              <div className="trans-title">
                <h3>{list.name}</h3>
                <h3 className={`type ${list.type}`}>{list.type}</h3>
              </div>
              <div className="tans-desc">
                <h3>{list.desc}</h3>
              </div>
            </div>
            <div className="trans-amount">
              <p>{list.amount}</p>
            </div>
            <div className="action-btns">
              <i
                className="fa-solid fa-pen-to-square edit"
                onClick={() => HanleEdit(list)}
              ></i>
              <i
                className="fa-solid fa-trash del"
                onClick={() => HanleDelete(list._id)}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
