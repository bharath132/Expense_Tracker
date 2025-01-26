import React from "react";
import data from "./datas";
export const CategorizedItemsList = () => {
  return (
    <div className="category_container">
      {data.map((list) => (
        <div key={list.name} className="categorize--item">
          <div className="row-info">
            <h3>{list.name}</h3>
            <h5 className="type income">{list.type}</h5>
          </div>
          <div className="action">
            <i class="fa-solid fa-pen-to-square edit"></i>
            <i class="fa-solid fa-trash del"></i>
          </div>
        </div>
      ))}
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
  );
};
