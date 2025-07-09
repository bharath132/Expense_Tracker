import React, { useState } from "react";
import axios from "axios";
import { set } from "mongoose";
export const CategoryItemAdder = ({ sendDataToParent }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("income");
  // const [categoryList, setcategoryList] = useState([]);
  const [error, setError] = useState("");
  const handleSave = () => {
    if (name === "") {
      setError("Please enter a category name");
      return;
    }
    axios
      .post(`${import.meta.env.VITE_API_URL}/createCategoryList`, {
        name,
        type,
      })
      .then((res) => {
        console.log(res);
        sendDataToParent(true);
      });
    // sendDataToParent(true);
  };
  return (
    <div className="categoryAdd-container">
      <input
        type="text"
        placeholder="Enter Category Name"
        onChange={(e) => {setName(e.target.value); setError("");}}
        required
      />
      {error && <p className="error">{error}</p>}
      <select
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <div className="btns">
        <button
          className="btn--secondary"
          onClick={() => {
            sendDataToParent(true);
          }}
        >
          cancel
        </button>
        <button type="submit" className="addbtn" onClick={handleSave}>
          save
        </button>
      </div>
    </div>
  );
};
