import AddonsEnum from "../../enums/AddonsEnum";
import selectStyles from "./select.module.css";

type Props = {
  name: string;
  description: string;
  price: string;
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  value: AddonsEnum;
};

const Select = (props: Props) => {
  return (
    <div
      className={`${selectStyles.selectWrapper} ${
        props.checked ? selectStyles.active : ""
      }`}
    >
      <input
        type="checkbox"
        onChange={props.change}
        checked={props.checked}
        value={props.value}
        name="addons"
      />
      <div className={`${selectStyles.infoWrapper}`}>
        <div className={selectStyles.textWrapper}>
          <p className={selectStyles.name}>{props.name}</p>
          <p className={selectStyles.desc}>{props.description}</p>
        </div>
        <p className={selectStyles.price}>{props.price}</p>
      </div>
    </div>
  );
};

export default Select;
