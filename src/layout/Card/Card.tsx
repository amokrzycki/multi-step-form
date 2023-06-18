import BillingEnum from "../../enums/BillingEnum";
import cardStyles from "./card.module.css";

type Props = {
  src: string;
  title: string;
  price: number;
  id?: string;
  billing: string;
};

const Card = (props: Props) => {
  return (
    <div id={props.id?.toString()} className={cardStyles.cardWrapper}>
      <img src={props.src} alt={props.title} />
      <p className={cardStyles.title}>{props.title}</p>
      <p className={cardStyles.price}>{`${props.price}/${
        props.billing === BillingEnum[0] ? "mo" : "yr"
      }`}</p>
      {props.billing === BillingEnum[1] ? (
        <p className={cardStyles.dealText}>2 months free</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
