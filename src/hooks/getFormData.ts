import FormType from "../types/FormType.ts";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";

const GetFormData = () => {
  const formData: FormType = {
    name: useSelector((state: RootState) => state.personalInfo.name),
    email: useSelector((state: RootState) => state.personalInfo.email),
    number: useSelector((state: RootState) => state.personalInfo.number),
    billing: useSelector((state: RootState) => state.planInfo.billing),
    billingPrice: useSelector(
      (state: RootState) => state.planInfo.billingPrice
    ),
    plan: useSelector((state: RootState) => state.planInfo.plan),
    addonsSelected: useSelector((state: RootState) => state.addonsSelected),
    total: useSelector((state: RootState) => state.total),
  };
  return formData;
};

export default GetFormData;
