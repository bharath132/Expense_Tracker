import React from "react";
import "../style/Slidebar.css";
import DashButton from "./DashButton";
function Slidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>ExTrack</h1>
      </div>
      {/* <div className="profile">
          <div className="user_logo"></div>
          <h2 className="username">USERNAME</h2>
        </div> */}
      <div className="menus">
        <div className="dashboard_buttons">
          <DashButton />
        </div>
        <div className="user_settings">
          <div className="settings">
            <i className="fa-solid fa-gear settings--icon"></i>
            <button className="settings--title">Setting</button>
          </div>

          <div className="settings">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <button className="settings--title">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slidebar;
