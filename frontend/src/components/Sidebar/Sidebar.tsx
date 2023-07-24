import sidebarStyles from "./sidebar.module.css";
import StepView from "./StepView/StepView";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import Alert from "../common/Alert/Alert.tsx";
import stepsList from "../../constans/StepList.ts";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [successOpen, setSuccessOpen] = React.useState(false);
  const stepNumber = useSelector((state: RootState) => state.step);
  const lastStep = useSelector((state: RootState) => state.lastStep);

  return (
    <div id="sidebar-wrapper" className={sidebarStyles.sidebarWrapper}>
      {stepsList.map((step) => (
        <Link
          to={
            parseInt(step.number) > lastStep
              ? window.location.href
              : `/step${step.number}`
          }
          key={step.number}
        >
          <StepView
            disabled={parseInt(step.number) > lastStep}
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            filled={stepNumber.toString() === step.number}
          />
        </Link>
      ))}
      <Alert
        type="success"
        text="Form was submitted successfully!"
        open={successOpen}
        set={setSuccessOpen}
      />
    </div>
  );
};

export default Sidebar;
