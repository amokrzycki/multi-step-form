import React from "react";
import viewStyles from "./view.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const View: React.FC = () => {
  return (
    <div id="container" className={viewStyles.container}>
      <div id="view-wrapper" className={viewStyles.viewWrapper}>
        <Sidebar />
        <div id="step-wrapper" className={viewStyles.formWrapper}>
          {/* DISPLAYING COMPONENTS FROM ROUTING */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default View;
