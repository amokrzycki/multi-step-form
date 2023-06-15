import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";
import viewStyles from "./view.module.css";
import { setFormData, setStep } from "../../store/actions";
import { RootState, AppDispatch } from "../../store/store";

const View: React.FC = () => {
  const step = useSelector((state: RootState) => state.step);
  const formData = useSelector((state: RootState) => state.formData);
  const dispatch: AppDispatch = useDispatch();

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

  return (
    <div id="container" className={viewStyles.container}>
      <div id="view-wrapper" className={viewStyles.viewWrapper}>
        <Sidebar />
        <Form
          prev={handlePrevStep}
          next={handleNextStep}
          confirm={handleConfirm}
          step={step}
          formData={formData}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default View;
