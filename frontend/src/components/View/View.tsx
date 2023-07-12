import React from "react";
import viewStyles from "./view.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Step from "../Step/Step.tsx";

const View: React.FC = () => {
  return (
    <div id="container" className={viewStyles.container}>
      <div id="view-wrapper" className={viewStyles.viewWrapper}>
        <Sidebar />
        <Step />
      </div>
    </div>
  );
};

export default View;
