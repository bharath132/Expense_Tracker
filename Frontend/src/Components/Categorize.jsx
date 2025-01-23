import React, { useState } from "react";
import "../style/Categorize.css";
import { CategorizedItemsList } from "./CategorizedItemsList";
export const Categorize = () => {
  const [edit,setedit]=useState(true)
  return (
    <div className="Categorize">
      <div className="title">
        <h1>Manage Categorize</h1>
      </div>
      <div className="center-wrapper">
        <div className="Categorize_header">
          <button className="addbtn">+ Add Categorize</button>
        </div>
        {edit?<CategorizedItemsList />:""}
      </div>
    </div>
  );
};
