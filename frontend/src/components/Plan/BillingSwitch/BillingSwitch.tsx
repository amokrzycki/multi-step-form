import switchStyles from "./billingSwitch.module.css";
import classNames from "classnames";
import { FormEventHandler } from "react";

interface Props {
  checked: boolean;
  handleSwitch: FormEventHandler<HTMLLabelElement>;
}

const BillingSwitch = ({ checked, handleSwitch }: Props) => {
  return (
    <div className={switchStyles.switchWrapper}>
      <p className={!checked ? switchStyles.active : switchStyles.inactive}>
        Monthly
      </p>
      <label className={switchStyles.switch} onChange={handleSwitch}>
        <input type="checkbox" defaultChecked={checked} />
        <span
          className={classNames(switchStyles.slider, switchStyles.round)}
        ></span>
      </label>
      <p className={checked ? switchStyles.active : switchStyles.inactive}>
        Yearly
      </p>
    </div>
  );
};
export default BillingSwitch;
