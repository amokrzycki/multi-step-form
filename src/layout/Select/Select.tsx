import selectStyles from "./select.module.css";

type Props = {
  name: string;
  description: string;
  price: string;
};

const Select = (props: Props) => {
  return (
    <div className={selectStyles.selectWrapper}>
      <input type="checkbox" />
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Select;
