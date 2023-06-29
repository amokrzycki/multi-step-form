import React from "react";
import viewStyles from "./view.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";

const View: React.FC = () => {
  return (
    <div id="container" className={viewStyles.container}>
      <div id="view-wrapper" className={viewStyles.viewWrapper}>
        <Sidebar />
        <Form />
      </div>
    </div>
  );
};

export default View;
