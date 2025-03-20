import axios from 'axios';
import React, { useState } from 'react'
export const TransactionItemAdder = ({sendDataToParent}) => {
    const [name, setName] = useState({});
    const [type, setType] = useState("");
    const handleSave = () => {
      console.log();
      sendDataToParent(true);
      axios.post('http://localhost:3000/createTranscationList',{name}).then((result)=>{
        console.log(result)
      })
    };
  return (
    <div className="categoryAdd-container">
    <input
      type="text"
      placeholder="Enter Category Name"
      onChange={(e) => setName({...name,name:e.target.value})}
    />
    <input
      type="text"
      placeholder="Enter Description Name"
      onChange={(e) => setName({...name,desc:e.target.value})}
    />
    <input type="select" placeholder="Enter Type"
    onChange={(e) => setName({...name,type:e.target.value})} />
    <input type="number" placeholder="Enter Amount"
    onChange={(e) => setName({...name,amount:e.target.value})} />
    <div className="btns">
      <button className="btn--secondary" onClick={()=>{sendDataToParent(true);}}>cancel</button>
      <button className="addbtn" onClick={handleSave} >
        save
      </button>
    </div>
  </div>
  )
}
