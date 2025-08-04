import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { TranscationItemsList } from "./TranscationItemsList";
import axios from "axios";
import LoadingCircle from "./LoadingCircle";
let Balance = 0;
let Income = 0;
let Expense = 0;

export const DashBoard = () => {
  const chartData = [
    {
      date: new Date().toLocaleString("default", { timeZone: "Asia/Kolkata" }),
      amount: 1000,
      expense: 0,
    },
    {
      date: new Date().toLocaleString("default", { timeZone: "Asia/Kolkata" }),
      amount: 0,
      expense: 0,
    },
    {
      date: new Date().toLocaleString("default", { timeZone: "Asia/Kolkata" }),
      amount: 0,
      expense: 0,
    },
    {
      date: new Date().toLocaleString("default", { timeZone: "Asia/Kolkata" }),
      amount: 0,
      expense: 0,
    },
    {
      date: new Date().toLocaleString("default", { timeZone: "Asia/Kolkata" }),
      amount: 0,
      expense: 0,
    },
  ];
  const [TransactiomList, setTransactiomList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/getTranscationList`)
      .then((res) => {
        setTransactiomList(res.data);
        console.log(res.data);
        setLoading(false);
      });
  }, []);
  for (let i of TransactiomList) {
    let date = new Date();
    let fromdate = date.setDate(date.getDate() - 30); // Adds 7 days to the current date
    console.log(date);
    if (new Date(i.date) > fromdate) {
      console.log(i);
      chartData.push({
        date: new Date(i.date).toLocaleString("default", { time: "none" }),
        amount: i.amount,
        expense: i.type === "expense" ? i.amount : 0,
      });
    }
  }
  TransactiomList.map((list) => {
    console.log(list.type);
    if (list.type === "expense") {
      Balance -= list.amount;
      Expense += list.amount;
     
      console.log(list.amount);
    } else if (list.type === "income") {
      Balance += list.amount;
      Income += list.amount;
     
    }
  });

  return (
    <>
      {loading ? (
        <LoadingCircle />
      ) : (
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
                <p>${Number(Income) - Number(Expense)}</p>
              </div>
            </div>
            <div className="dash_box box2">
              <div className="dash_logo">
                <i className="fa-solid fa-money-check-dollar"></i>
              </div>
              <div className="dash_desc">
                <h1>Income</h1>
                <p>${Number(Income)}</p>
              </div>
            </div>
            <div className="dash_box box3">
              <div className="dash_logo">
                <i className="fa-solid fa-money-check-dollar"></i>
              </div>
              <div className="dash_desc">
                <h1>Expense</h1>
                <p>${Number(Expense)}</p>
              </div>
            </div>
          </div>
          <div className="dash-chart-1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#2563eb"
                  strokeWidth={2}
                  // dot={false}
                  activeDot={{ r: 8 }}
                  isAnimationActive={false}
                  animationDuration={1000}
                  animationEasing="ease-in-out"
                  animationBegin={0}
                  animationId={1}
                  animationTimingFunction="ease-in-out"
                />
                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="red"
                  strokeWidth={4}
                  // dot={false}
                  activeDot={{ r: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="dash-chart-2"></div>
          <div className="receent_traans">
            <h1>Recent Transcation</h1>
            <TranscationItemsList />
          </div>
        </div>
      )}
    </>
  );
};
