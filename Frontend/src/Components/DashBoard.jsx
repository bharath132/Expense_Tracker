import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { LayoutDashboard, Receipt, PieChart, Settings, LogOut, Plus } from 'lucide-react';
import { TranscationItemsList } from "./TranscationItemsList";
export const DashBoard = () => {

  const chartData = [
    { month: 'Jan', amount: 1100 , expense : 100},
    { month: 'Feb', amount: 1400 , expense : 200},
    { month: 'Mar', amount: 1200 , expense : 100},
    { month: 'Apr', amount: 1300 , expense : 400},
    { month: 'May', amount: 1500 , expense : 300}
  ];
  return (
    <div className="main-section">
      <div className="title">
        <h1>Dashboard</h1>
      </div>

      <div className="dash-info">
        <div className="dash_box box1">
          <div className="dash_logo">
            <i className="fa-solid fa-money-check-dollar"></i>
          </div>
          <div className="dash_desc">
            <h1>Balance</h1>
            <p>$11000</p>
          </div>
        </div>
        <div className="dash_box box2">
          <div className="dash_logo">
            <i className="fa-solid fa-money-check-dollar"></i>
          </div>
          <div className="dash_desc">
            <h1>Income</h1>
            <p>$11000</p>
          </div>
        </div>
        <div className="dash_box box3">
          <div className="dash_logo">
            <i className="fa-solid fa-money-check-dollar"></i>
          </div>
          <div className="dash_desc">
            <h1>Expense</h1>
            <p>$11000</p>
          </div>
        </div>
      </div>
      <div className="dash-chart-1">
      <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#2563eb" strokeWidth={2} />
            <Line type="monotone" dataKey="expense" stroke="red" strokeWidth={4} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="dash-chart-2"></div>
      <div className="receent_traans">
        <h1>Recent Transcation</h1>
        <TranscationItemsList/>
      </div>
    </div>
  );
};
