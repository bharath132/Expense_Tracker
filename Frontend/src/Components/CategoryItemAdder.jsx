import React, { useState } from "react";
import axios from 'axios'
export const CategoryItemAdder = ({ sendDataToParent }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const handleSave = () => {
    axios.post('http://localhost:3000/createCategoryList',{name,type}).then((res)=>{
      console.log(res)
    })
    sendDataToParent(true);
  };
  return (
    <div className="categoryAdd-container">
      <input
        type="text"
        placeholder="Enter Category Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input type="select" placeholder="Enter Type"
      onChange={(e) => setType(e.target.value)} />
      <div className="btns">
        <button className="btn--secondary" onClick={()=>{sendDataToParent(true)}}>cancel</button>
        <button className="addbtn" onClick={handleSave}>
          save
        </button>
      </div>
    </div>
  );
};
