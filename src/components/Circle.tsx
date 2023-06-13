import styles from "../modules/styles.module.css";

type Props = {
  number: string;
};

const Circle = (props: Props) => {
  return (
    <div className={styles.circle}>
      <span className={styles.number}>{props.number}</span>
    </div>
  );
};

export default Circle;
