import React from "react";
import "../style/Categorize.css";
export const Categorize = () => {
  return (
    <div className="Categorize">
      <div className="title">
        <h1>Manage Categorize</h1>
      </div>
      <div className="center-wrapper">
        <div className="Categorize_header">
          <button className="addbtn">+ Add Categorize</button>
        </div>
        <div className="category_container">
          <div className="categorize--item">
            <div className="row-info">
              <h3>Salary</h3>
              <h5 className="type income">Income</h5>
            </div>
            <div className="action">
              <i class="fa-solid fa-pen-to-square edit"></i>
              <i class="fa-solid fa-trash del"></i>
            </div>
          </div>
          <div className="categorize--item">
            <div className="row-info">
              <h3>Food</h3>
              <h5 className="type">Expense</h5>
            </div>
            <div className="action">
              <i class="fa-solid fa-pen-to-square edit"></i>
              <i class="fa-solid fa-trash del"></i>
            </div>
          </div>
          <div className="categorize--item">
            <div className="row-info">
              <h3>Salary</h3>
              <h5 className="type income">Income</h5>
            </div>
            <div className="action">
              <i class="fa-solid fa-pen-to-square edit"></i>
              <i class="fa-solid fa-trash del"></i>
            </div>
          </div>
          <div className="categorize--item">
            <div className="row-info">
              <h3>Food</h3>
              <h5 className="type">Expense</h5>
            </div>
            <div className="action">
              <i class="fa-solid fa-pen-to-square edit"></i>
              <i class="fa-solid fa-trash del"></i>
            </div>
          </div>
          <div className="categorize--item">
            <div className="row-info">
              <h3>Salary</h3>
              <h5 className="type income">Income</h5>
            </div>
            <div className="action">
              <i class="fa-solid fa-pen-to-square edit"></i>
              <i class="fa-solid fa-trash del"></i>
            </div>
          </div>
          <div className="categorize--item">
            <div className="row-info">
              <h3>Food</h3>
              <h5 className="type">Expense</h5>
            </div>
            <div className="action">
              <i class="fa-solid fa-pen-to-square edit"></i>
              <i class="fa-solid fa-trash del"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
