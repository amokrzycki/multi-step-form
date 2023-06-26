import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setName,
  setNumber,
  setStep,
  setTotal,
} from "../../store/actions";
import { RootState, AppDispatch } from "../../store/store";
import FormType from "../../types/FormType";
import Alert from "../Alert/Alert";
import viewStyles from "./view.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";

const View: React.FC = () => {
  const step = useSelector((state: RootState) => state.step);
  const lastStep = useSelector((state: RootState) => state.lastStep);
  const formData: FormType = {
    name: useSelector((state: RootState) => state.name),
    email: useSelector((state: RootState) => state.email),
    number: useSelector((state: RootState) => state.number),
    billing: useSelector((state: RootState) => state.billing),
    billingPrice: useSelector((state: RootState) => state.billingPrice),
    plan: useSelector((state: RootState) => state.plan),
    addonsSelected: useSelector((state: RootState) => state.addonsSelected),
    addonsPrices: useSelector((state: RootState) => state.addonsPrices),
    total: useSelector((state: RootState) => state.total),
  };
  const dispatch: AppDispatch = useDispatch();
  const [successOpen, setSuccessOpen] = React.useState(false);

  const handleInfoFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "name") {
      dispatch(setName(value));
    }
    if (name === "email") {
      dispatch(setEmail(value));
    }
    if (name === "number") {
      dispatch(setNumber(value));
    }
  };

  const handleSidebarNavigation: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    if (step === 5) {
      setSuccessOpen(true);
      return;
    }

    if (parseFloat(e.currentTarget.id) <= lastStep) {
      dispatch(setStep(parseInt(e.currentTarget.id)));
    }

    if (e.currentTarget.id === "4") {
      const totalPrice =
        formData.billingPrice +
        formData.addonsPrices.reduce((a, b) => a + b, 0);

      dispatch(setTotal(totalPrice));
    }
  };

  return (
    <div id="container" className={viewStyles.container}>
      <div id="view-wrapper" className={viewStyles.viewWrapper}>
        <Sidebar navigate={handleSidebarNavigation} step={step} />
        <Form formData={formData} handleChange={handleInfoFromChange} />
      </div>
      <Alert
        type="success"
        text="Form was submitted successfully!"
        open={successOpen}
        set={setSuccessOpen}
      />
    </div>
  );
};

export default View;
