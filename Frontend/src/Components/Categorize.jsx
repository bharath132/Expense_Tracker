import React, { useState } from "react";
import "../style/Categorize.css";
import { CategorizedItemsList } from "./CategorizedItemsList";
import { CategoryItemAdder } from "./CategoryItemAdder";
export const Categorize = () => {
  const [edit,setedit]=useState(true)
  function HandleAddBtn(){
    setedit(false)
  }
  const handleDataFromChild = (data) => {
    setedit(data); // Update state with the data received

  };
  return (
    <div className="Categorize">
      <div className="title">
        <h1>Manage Categorize</h1>
      </div>
      <div className="center-wrapper">
        <div className="Categorize_header">
          <button className="addbtn" onClick={HandleAddBtn}>+ Add Categorize</button>
        </div>
        {edit?<CategorizedItemsList />:<CategoryItemAdder sendDataToParent={handleDataFromChild}/>}
      </div>
    </div>
  );
};
