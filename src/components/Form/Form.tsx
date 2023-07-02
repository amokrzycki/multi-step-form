import React from "react";
import FormType from "../../types/FormType";
import Step from "../Step/Step";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

const Form: React.FC = () => {
  const formData: FormType = {
    name: useSelector((state: RootState) => state.name),
    email: useSelector((state: RootState) => state.email),
    number: useSelector((state: RootState) => state.number),
    billing: useSelector((state: RootState) => state.billing),
    billingPrice: useSelector((state: RootState) => state.billingPrice),
    plan: useSelector((state: RootState) => state.plan),
    addonsSelected: useSelector((state: RootState) => state.addonsSelected),
    total: useSelector((state: RootState) => state.total),
  };

  return <Step formData={formData} />;
};

export default Form;
