import React from "react";
import "./slidebar.css";
import DashButton from "../DashboardButton/DashButton";
function Slidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>ExTrack</h1>
      </div>
        <div className="profile">
          <div className="user_logo"></div>
          <h2 className="username">USERNAME</h2>
        </div>
      <div className="menus">
        <div className="dashboard_buttons">
          <DashButton />
        </div>
        <div className="settings_buttons">
        <i class="fa-solid fa-gear"></i>
          <button className="settings">Setting</button><br />
          <button className="sign_out">Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default Slidebar;
