import summaryStyles from "./summary.module.css";
import BillingEnum from "../../enums/BillingEnum";
import FormType from "../../types/FormType";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import Headline from "../common/layout/Headline/Headline";
import buttonStyles from "../common/layout/Button/button.module.css";
import Button from "../common/layout/Button/Button";
import useTotalPrice from "../../hooks/useTotalPrice.ts";
import GetFormData from "../../hooks/getFormData.ts";
import FormService from "../../services/FormService.ts";
import { setNextStep } from "../../store/appSlice.ts";
import { AppDispatch } from "../../store/store.ts";
import { useDispatch } from "react-redux";

const Summary = () => {
  const formData: FormType = GetFormData();
  const billingType = formData.billing === BillingEnum.Monthly ? "mo" : "yr";
  const { totalPrice, addonsPrices } = useTotalPrice();
  const dispatch: AppDispatch = useDispatch();

  const handleConfirm = () => {
    FormService.postFormData(formData).then((r) => {
      if (r.status === 200) {
        window.location.href = "/confirmation";
      }
    });
  };

  const handlePrevClick = () => {
    dispatch(setNextStep());
    window.history.back();
  };

  return (
    <Wrapper>
      <Headline
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />
      <div className={summaryStyles.summaryWrapper}>
        {/* PLAN DISPLAYING */}
        <div className={summaryStyles.planInfo}>
          <div id="plan-type">
            <p>{`${formData.plan} (${formData.billing})`} </p>
            <button className={summaryStyles.changeButton}>Change</button>
          </div>
          <p
            className={summaryStyles.price}
          >{`$${formData.billingPrice}/${billingType}`}</p>
        </div>
        <hr className={summaryStyles.line} />
        {/* ADDONS DISPLAYING */}
        <div
          className={summaryStyles.addonsInfo}
          style={
            formData.addonsSelected.length === 0 ? { alignItems: "center" } : {}
          }
        >
          {formData.addonsSelected.length === 0 ? (
            <p className={summaryStyles.emptyAddons}>No addons</p>
          ) : (
            formData.addonsSelected.map((addon, index) => (
              <div key={index} className={summaryStyles.addonsElements}>
                <p>{addon}</p>
                <p
                  className={summaryStyles.price}
                >{`+$${addonsPrices[index]}/${billingType}`}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className={summaryStyles.totalWrapper}>
        <p className={summaryStyles.totalText}>{`Total (per ${
          formData.billing === BillingEnum.Monthly ? "month" : "year"
        })`}</p>
        <p
          className={summaryStyles.totalPrice}
        >{`$${totalPrice}/${billingType}`}</p>
      </div>
      {/* NAVIGATION */}
      <div className={buttonStyles.navigationWrapper}>
        <Button
          text="Go back"
          color="transparent"
          textColor="hsl(231, 11%, 63%)"
          click={handlePrevClick}
        />
        <Button
          text="Confirm"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          click={handleConfirm}
        />
      </div>
    </Wrapper>
  );
};

export default Summary;
