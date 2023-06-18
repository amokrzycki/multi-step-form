import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";
import viewStyles from "./view.module.css";
import { setFormData, setStep } from "../../store/actions";
import { RootState, AppDispatch } from "../../store/store";
import React from "react";

const View: React.FC = () => {
  const step = useSelector((state: RootState) => state.step);
  const formData = useSelector((state: RootState) => state.formData);
  const dispatch: AppDispatch = useDispatch();
  const [checked, setChecked] = React.useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const handleNextStep = () => {
    dispatch(setStep(step + 1));
  };

  const handlePrevStep = () => {
    dispatch(setStep(step - 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setFormData({ ...formData, [name]: value }));
  };

  const handleConfirm = () => {
    dispatch(setStep(step + 1));
    console.log(formData);
  };

  const handleStepNavigation: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dispatch(setStep(parseInt(e.currentTarget.id)));
  };

  const handleAddonsCheck = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);

    console.log(e.target);

    if (e.target.checked === true) {
      dispatch(
        setFormData({
          ...formData,
          [e.target.name]: [...formData.addons, e.target.value],
        })
      );
    } else {
      dispatch(
        setFormData({
          ...formData,
          [e.target.name]: formData.addons.filter(
            (addon) => addon !== e.target.value
          ),
        })
      );
    }
  };

  return (
    <div id="container" className={viewStyles.container}>
      <div id="view-wrapper" className={viewStyles.viewWrapper}>
        <Sidebar navigate={handleStepNavigation} />
        <Form
          prev={handlePrevStep}
          next={handleNextStep}
          confirm={handleConfirm}
          step={step}
          formData={formData}
          handleChange={handleChange}
          handleCheck={handleAddonsCheck}
          checked={checked}
        />
      </div>
    </div>
  );
};

export default View;
