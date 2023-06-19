import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import summaryStyles from "./summary.module.css";
import BillingEnum from "../../enums/BillingEnum";
import { buttonStyles, Button, Headline, Wrapper } from "../../layout";

type Props = {
  handleConfirm: () => void;
  handlePrevStep: () => void;
};

const Summary = (props: Props) => {
  const formData = useSelector((state: RootState) => state);
  const billingType = formData.billing === BillingEnum[0] ? "mo" : "yr";

  return (
    <Wrapper>
      <Headline
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />
      <div className={summaryStyles.summaryWrapper}>
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
        <div
          className={summaryStyles.addonsInfo}
          style={formData.addons.length === 0 ? { alignItems: "center" } : {}}
        >
          {formData.addons.length === 0 ? (
            <p className={summaryStyles.emptyAddons}>No addons</p>
          ) : (
            formData.addons.map((addon, index) => (
              <div key={index} className={summaryStyles.addonsElements}>
                <p>{addon}</p>
                <p
                  className={summaryStyles.price}
                >{`+$${formData.prices[index]}/${billingType}`}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className={summaryStyles.totalWrapper}>
        <p className={summaryStyles.totalText}>{`Total (per ${
          formData.billing === BillingEnum[0] ? "month" : "year"
        })`}</p>
        <p
          className={summaryStyles.totalPrice}
        >{`$${formData.total}/${billingType}`}</p>
      </div>
      <div className={buttonStyles.navigationWrapper}>
        <Button
          text="Go back"
          color="transparent"
          textColor="hsl(231, 11%, 63%)"
          click={props.handlePrevStep}
        />
        <Button
          text="Confirm"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          click={props.handleConfirm}
        />
      </div>
    </Wrapper>
  );
};

export default Summary;
