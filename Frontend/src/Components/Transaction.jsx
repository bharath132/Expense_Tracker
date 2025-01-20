import React from "react";
import "../style/Transaction.css";
export const Transaction = () => {
  return (
    <div className="Transaction">
      <div className="title">
        <h1>Transaction</h1>
      </div>
      <div className="Transactiom--con">
      <div className="Transactiom--table">
          <div className="trans-item">
            <div className="Trans-info">
              <div className="trans-title">
                <h3>netflix</h3>
                <h3 className="type">Type</h3>
              </div>
              <div className="tans-desc">
              <h3>Salary</h3>
              
              <h3>24/02/2000</h3>
              </div>
            </div>
            <div className="trans-amount">
              <p>+90000</p>
            </div>
          </div>
          <div className="action-btns">
            <i class="fa-solid fa-pen-to-square edit"></i>
            <i class="fa-solid fa-trash del"></i>
          </div>
        </div>
        <div className="Transactiom--table">
          <div className="trans-item">
            <div className="Trans-info">
              <div className="trans-title">
                <h3>netflix</h3>
                <h3 className="type income" >income</h3>
              </div>
              <div className="tans-desc">
              <h3>Salary</h3>
              
              <h3>24/02/2000</h3>
              </div>
            </div>
            <div className="trans-amount">
              <p>+90000</p>
            </div>
          </div>
          <div className="action-btns">
            <i class="fa-solid fa-pen-to-square edit"></i>
            <i class="fa-solid fa-trash del"></i>
          </div>
        </div>
        <div className="Transactiom--table">
          <div className="trans-item">
            <div className="Trans-info">
              <div className="trans-title">
                <h3>netflix</h3>
                <h3 className="type">Type</h3>
              </div>
              <div className="tans-desc">
              <h3>Salary</h3>
              
              <h3>24/02/2000</h3>
              </div>
            </div>
            <div className="trans-amount">
              <p>+90000</p>
            </div>
          </div>
          <div className="action-btns">
            <i class="fa-solid fa-pen-to-square edit"></i>
            <i class="fa-solid fa-trash del"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
