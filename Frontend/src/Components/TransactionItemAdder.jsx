import axios from "axios";
import React, { useEffect, useState } from "react";
export const TransactionItemAdder = ({ sendDataToParent }) => {
  const [name, setName] = useState({ name: "food", type: "income" });
  const [categoryList, setcategoryList] = useState([]);
  const handleSave = () => {
    console.log();
    sendDataToParent(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/createTranscationList`, { name:name.name , desc: name.desc, amount: name.amount, type: name.type })
      .then((result) => {
        console.log(result);
      });
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/getCategoriryList`)
      .then((res) => {
        setcategoryList(res.data);
        setName({...name, name:res.data[0].name , type:res.data[0].type});
      });
  }, []);
  const HandleCategory = (e) =>{
    setName({ ...name, name: e.target.value })
    console.log(categoryList[1].name.includes('salary'));
  }
  // const categoryList=['food','travel']
  return (
    <div className="categoryAdd-container">
      {/* <input
      type="text"
      placeholder="Enter Category Name"
      onChange={(e) => setName({...name,name:e.target.value})}
    /> */}
      <select
        name=""
        id=""
        placeholder="Enter Category Name"
        onChange={HandleCategory}
      >
        {categoryList.map((list, index) => (
          <option value={list.name} key={index}>
            {list.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter Description Name"
        onChange={(e) => setName({ ...name, desc: e.target.value })}
      />
      <select
        onChange={(e) => {
          setName({ ...name, type: e.target.value });
        }}
      >
        <option value="income">{name.type}</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="number"
        placeholder="Enter Amount"
        onChange={(e) => setName({ ...name, amount: e.target.value })}
      />
      <div className="btns">
        <button
          className="btn--secondary"
          onClick={() => {
            sendDataToParent(true);
          }}
        >
          cancel
        </button>
        <button className="addbtn" onClick={handleSave}>
          save
        </button>
      </div>
    </div>
  );
};
