import { useEffect } from "react";
import stepStyles from "../Step/step.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setLastStep, setNextStep, setPrevStep } from "../../store/appSlice.ts";
import Addons from "../AddonsSelection/Addons/Addons";
import Confirmation from "../Confirmation/Confirmation";
import Pricing from "../Plan/Pricing/Pricing.tsx";
import Summary from "../Summary/Summary";
import PersonalInfo from "../Info/PersonalInfo/PersonalInfo.tsx";
import FormType from "../../types/FormType";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Fallback from "../Fallback/Fallback.tsx";

const Step = () => {
  const lastStep = useSelector((state: RootState) => state.lastStep);
  const step = useSelector((state: RootState) => state.step);
  const dispatch: AppDispatch = useDispatch();

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

  const handleNextStep = () => {
    router
      .navigate(`/step${step + 1}`, { replace: true })
      .then(() => dispatch(setNextStep()))
      .catch((e) => console.log(e));
  };

  const handlePrevStep = () => {
    router
      .navigate(`step${step - 1}`)
      .then(() => {
        dispatch(setPrevStep());
      })
      .catch((e) => console.log(e));
  };

  const handleSubmit = () => {
    router
      .navigate(`/step${step + 1}`, { replace: true })
      .then(() => dispatch(setNextStep()))
      .catch((e) => console.log(e));
    console.log(formData);
  };

  useEffect(() => {
    if (step > lastStep) {
      dispatch(setLastStep(step));
    }
  }, [dispatch, lastStep, step]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<Fallback />}>
        <Route
          path="step1"
          element={
            <PersonalInfo handleNextStep={handleNextStep} formData={formData} />
          }
        />
        <Route
          path="step2"
          element={
            <Pricing
              handleNextStep={handleNextStep}
              handlePrevStep={handlePrevStep}
              formData={formData}
            />
          }
        />
        <Route
          path="step3"
          element={
            <Addons
              handleNextStep={handleNextStep}
              handlePrevStep={handlePrevStep}
              formData={formData}
            />
          }
        />
        <Route
          path="step4"
          element={
            <Summary
              handleConfirm={handleSubmit}
              handlePrevStep={handlePrevStep}
              formData={formData}
            />
          }
        />
        <Route path="step5" element={<Confirmation />} />
        <Route path="*" element={<Navigate to="/step1" replace />} />
      </Route>
    )
  );

  return (
    <div id="step-wrapper" className={stepStyles.formWrapper}>
      <RouterProvider router={router} />
    </div>
  );
};

export default Step;
