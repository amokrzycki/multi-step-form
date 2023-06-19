import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFormData } from "../../store/actions";
import { RootState, AppDispatch } from "../../store/store";
import { Sidebar, Form, viewStyles } from "../index";
import FormInterface from "../../interfaces/FormInterface";

const View: React.FC = () => {
  const [step, setStep] = React.useState<number>(1);
  const formData: FormInterface = {
    name: useSelector((state: RootState) => state.name),
    email: useSelector((state: RootState) => state.email),
    number: useSelector((state: RootState) => state.number),
    billing: useSelector((state: RootState) => state.billing),
    billingPrice: useSelector((state: RootState) => state.billingPrice),
    plan: useSelector((state: RootState) => state.plan),
    addons: useSelector((state: RootState) => state.addons),
    prices: useSelector((state: RootState) => state.prices),
    total: useSelector((state: RootState) => state.total),
  };
  const dispatch: AppDispatch = useDispatch();
  const [addonsChecked, setAddonsChecked] = React.useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleInfoFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setFormData({ ...formData, [name]: value }));
  };

  const handleFormConfirm = () => {
    setStep(step + 1);
    console.log(formData);
  };

  const handleSidebarNavigation: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    setStep(parseInt(e.currentTarget.id));
  };

  const handleAddonsCheck = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newChecked = [...addonsChecked];
    newChecked[index] = !newChecked[index];
    setAddonsChecked(newChecked);

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
        <Sidebar navigate={handleSidebarNavigation} step={step} />
        <Form
          prev={handlePrevStep}
          next={handleNextStep}
          confirm={handleFormConfirm}
          step={step}
          formData={formData}
          handleChange={handleInfoFromChange}
          handleCheck={handleAddonsCheck}
          checked={addonsChecked}
        />
      </div>
    </div>
  );
};

export default View;
