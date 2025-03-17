import React, { useState } from "react";
import "../style/DashButton.css";
import { useLocation, useNavigate } from "react-router-dom";
function DashButton() {
  const dashbtn = [
    { name: "Dashboard", icon: "fa-solid fa-gauge " },
    { name: "Categorize", icon: "fa-solid fa-money-check" },
    { name: "Transaction", icon: "fa-solid fa-arrow-right-arrow-left" },
  ];
  const navigator = useNavigate();
  const location = useLocation();
  function Handlebtn(e) {
    navigator(`/${e.target.text}`);
  }
  if(location.pathname=='/'){
    location.pathname='/Dashboard'
  }
  return (
    
    <div className="navbar--links">
      {dashbtn.map((btn) => (
        
        <a href={`/${btn.name}`}
          key={btn.name}
          className={`dashbtns ${
            location.pathname == `/${btn.name}` ? "active" : ""
          }`}
          onClick={(e) => Handlebtn(e)}
        >
          <i className={btn.icon} ></i>
          {btn.name}
        </a>
      ))}
    </div>
  );
}

export default DashButton;
