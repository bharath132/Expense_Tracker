import axios from "axios";
import React, { useEffect } from "react";

const TransactiomList = [
  {
    amount: "jyug",
    desc: "ds",
    name: "dwa",
    type: "rgrg",
  },
  {
    amount: "jyug",
    desc: "ds",
    name: "dwa",
    type: "rgrg",
  },
];
export const TranscationItemsList = () => {
  useEffect(() => {
    axios.post("http://localhost:3000/getTranscationList").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className="Transactiom--con">
      {TransactiomList.map((list,index) => (
        <div className="Transactiom--table" key={index}>
          <div className="trans-item">
            <div className="Trans-info">
              <div className="trans-title">
                <h3>{list.name}</h3>
                <h3 className="type">{list.type}</h3>
              </div>
              <div className="tans-desc">
                <h3>{list.desc}</h3>

                <h3>24/02/2000</h3>
              </div>
            </div>
            <div className="trans-amount">
              <p>{list.amount}</p>
            </div>
            <div className="action-btns">
              <i className="fa-solid fa-pen-to-square edit"></i>
              <i className="fa-solid fa-trash del"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
