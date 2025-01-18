import React from "react";

export const DashBoard = () => {
  return (
    <div className="main-section">
      <div className="title">
        <h1>Dashboard</h1>
      </div>

      <div className="dash-info">
        <div className="dash_box box1">
          <div className="dash_logo">
            <i class="fa-solid fa-money-check-dollar"></i>
          </div>
          <div className="dash_desc">
            <h1>Balance</h1>
            <p>$11000</p>
          </div>
        </div>
        <div className="dash_box box2">
          <div className="dash_logo">
            <i class="fa-solid fa-money-check-dollar"></i>
          </div>
          <div className="dash_desc">
            <h1>Income</h1>
            <p>$11000</p>
          </div>
        </div>
        <div className="dash_box box3">
          <div className="dash_logo">
            <i class="fa-solid fa-money-check-dollar"></i>
          </div>
          <div className="dash_desc">
            <h1>Expense</h1>
            <p>$11000</p>
          </div>
        </div>
      </div>
      <div className="dash-chart-1"></div>
      <div className="dash-chart-2"></div>
    </div>
  );
};
