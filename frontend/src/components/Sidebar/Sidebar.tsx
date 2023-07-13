import sidebarStyles from "./sidebar.module.css";
import StepView from "./StepView/StepView";
import React from "react";
import { setStep } from "../../store/appSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store.ts";
import Alert from "../common/Alert/Alert.tsx";
import StepType from "../../types/StepType.ts";
import getStepList from "../../hooks/getStepList.ts";
import LoadingSpinner from "../common/layout/LoadingSpinner/LoadingSpinner.tsx";

const Sidebar = () => {
  const [stepsList, setStepsList] = React.useState<Array<StepType>>([]);
  const [loading, setLoading] = React.useState(true);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const stepNumber = useSelector((state: RootState) => state.step);
  const lastStep = useSelector((state: RootState) => state.lastStep);
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    getStepsList();
  }, []);

  const getStepsList = () => {
    getStepList()
      .then((steps) => {
        setStepsList(steps);
      })
      .finally(() => {
        setLoading(false);
      });
  };
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
      {loading ? (
        <LoadingSpinner />
      ) : (
        stepsList.map((step) => (
          <StepView
            disabled={stepNumber === 5}
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            filled={stepNumber.toString() === step.number}
            navigate={handleSidebarNavigation}
          />
        ))
      )}
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
