import cardStyles from "./card.module.css";

type Props = {
  src: string;
  title: string;
  price: string;
};

const Card = (props: Props) => {
  return (
    <div className={cardStyles.cardWrapper}>
      <img src={props.src} alt={props.title} />
      <p className={cardStyles.title}>{props.title}</p>
      <p className={cardStyles.price}>{props.price}</p>
    </div>
  );
};

export default Card;
