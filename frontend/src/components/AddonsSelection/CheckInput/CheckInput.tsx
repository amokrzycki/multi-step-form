import BillingEnum from "../../../enums/BillingEnum.ts";
import checkInputStyles from "./checkInput.module.css";
import React from "react";

type Props = {
  name: string;
  description: string;
  price: number;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  value: string;
  billing: string;
};

const CheckInput = (props: Props) => {
  const billingType = props.billing === BillingEnum.Monthly ? "mo" : "yr";
  return (
    <div
      className={`${checkInputStyles.checkInputWrapper} ${
        props.checked ? checkInputStyles.active : ""
      }`}
    >
      <input
        id={props.price.toString()}
        type="checkbox"
        onChange={props.change}
        checked={props.checked}
        value={props.value}
        name="addons"
      />
      <div className={`${checkInputStyles.infoWrapper}`}>
        <div className={checkInputStyles.textWrapper}>
          <p className={checkInputStyles.name}>{props.name}</p>
          <p className={checkInputStyles.desc}>{props.description}</p>
        </div>
        <p
          className={checkInputStyles.price}
        >{`+${props.price}/${billingType}`}</p>
      </div>
    </div>
  );
};

export default CheckInput;
