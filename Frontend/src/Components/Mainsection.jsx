import React from "react";
import "../style/Mainsection.css";
import { DashBoard } from "./DashBoard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Categorize } from "./Categorize";
import { Transaction } from "./Transaction";
function Mainsection() {
  return (
    <>
      <Routes>
        <Route path="/Dashboard" element={<DashBoard />}></Route>
        <Route path="/Categorize" element={<Categorize />}></Route>
        <Route path="/Transaction" element={<Transaction />}></Route> 
      </Routes>
    </>
  );
}

export default Mainsection;
