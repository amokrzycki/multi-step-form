import sidebarStyles from "./sidebar.module.css";
import StepView from "../../layout/StepView/StepView";
import React from "react";
import { setStep } from "../../store/actions.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store.ts";
import Alert from "../Alert/Alert.tsx";

const stepsList = [
  {
    number: "1",
    title: "Step 1",
    description: "Your info",
  },
  {
    number: "2",
    title: "Step 2",
    description: "CheckInput Plan",
  },
  {
    number: "3",
    title: "Step 3",
    description: "Add-ons",
  },
  {
    number: "4",
    title: "Step 4",
    description: "Summary",
  },
];

const Sidebar = () => {
  const [successOpen, setSuccessOpen] = React.useState(false);
  const stepNumber = useSelector((state: RootState) => state.step);
  const lastStep = useSelector((state: RootState) => state.lastStep);
  const dispatch: AppDispatch = useDispatch();
  const handleSidebarNavigation: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    const id = parseFloat(e.currentTarget.id);
    if (stepNumber === 5) {
      setSuccessOpen(true);
    }

    if (id <= lastStep) {
      dispatch(setStep(id));
    }
  };

  return (
    <div id="sidebar-wrapper" className={sidebarStyles.sidebarWrapper}>
      {stepsList.map((step) => (
        <StepView
          disabled={stepNumber === 5}
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
          filled={stepNumber.toString() === step.number}
          navigate={handleSidebarNavigation}
        />
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
