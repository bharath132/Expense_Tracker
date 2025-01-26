import React, { useState } from 'react'
import data from './datas.json'
export const TransactionItemAdder = ({sendDataToParent}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const handleSave = () => {
      console.log(name,type);
      data.push({"name":name,"type":type})
      sendDataToParent(true);
    };
  return (
    <div className="categoryAdd-container">
    <input
      type="text"
      placeholder="Enter Category Name"
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="text"
      placeholder="Enter Description Name"
      onChange={(e) => setName(e.target.value)}
    />
    <input type="select" placeholder="Enter Type"
    onChange={(e) => setType(e.target.value)} />
    <input type="select" placeholder="Enter Amount"
    onChange={(e) => setType(e.target.value)} />
    <div className="btns">
      <button className="btn--secondary">cancel</button>
      <button className="addbtn" onClick={handleSave} >
        save
      </button>
    </div>
  </div>
  )
}
