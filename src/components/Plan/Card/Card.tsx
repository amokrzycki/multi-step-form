import BillingEnum from "../../../enums/BillingEnum.ts";
import cardStyles from "./card.module.css";
import classNames from "classnames";

interface Props {
  src: string;
  title: string;
  price: number;
  id?: string;
  billing: string;
  isActive?: boolean;
}

const Card = (props: Props) => {
  const billingType = props.billing === BillingEnum.Monthly ? "mo" : "yr";

  return (
    <div
      id={props.id?.toString()}
      className={classNames(cardStyles.cardWrapper, {
        [cardStyles.active]: props.isActive,
      })}
    >
      <img src={props.src} alt={props.title} />
      <p className={cardStyles.title}>{props.title}</p>
      <p className={cardStyles.price}>{`${props.price}/${billingType}`}</p>
      {props.billing === BillingEnum.Yearly ? (
        <p className={cardStyles.dealText}>2 months free</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
