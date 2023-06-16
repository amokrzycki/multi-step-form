import buttonStyles from "../../layout/Button/button.module.css";
import Button from "../../layout/Button/Button";
import Card from "../../layout/Card/Card";
import planStyles from "./plan.module.css";
import Headline from "../../layout/Headline/Headline";
import ClickableDiv from "../../layout/ClickableDiv/ClickableDiv";
import Wrapper from "../../layout/Wrapper/Wrapper";
import PlanEnum from "../../enums/Plan";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setFormData } from "../../store/actions";
import cardStyles from "../../layout/Card/card.module.css";

type Props = {
  handleNextStep: () => void;
  handlePrevStep: () => void;
};

const plans = [
  {
    src: "../../assets/images/icon-arcade.svg",
    title: "Arcade",
    price: "$9/mo",
    type: PlanEnum,
  },
  {
    src: "../../assets/images/icon-advanced.svg",
    title: "Advanced",
    price: "$12/mo",
    type: PlanEnum,
  },
  {
    src: "../../assets/images/icon-pro.svg",
    title: "Pro",
    price: "$15/mo",
    type: PlanEnum,
  },
];

const Plan = (props: Props) => {
  const formData = useSelector((state: RootState) => state.formData);
  const dispatch: AppDispatch = useDispatch();

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const activeElements = document.getElementsByClassName(cardStyles.active);

    for (let i = 0; i < activeElements.length; i++) {
      activeElements[i].classList.remove(cardStyles.active);
    }

    e.currentTarget.children[0].classList.add(`${cardStyles.active}`);

    dispatch(
      setFormData({ ...formData, ["plan"]: e.currentTarget.children[0].id })
    );
  };

  return (
    <Wrapper>
      <Headline
        title="Select your plan"
        description="You have the option of monthly or yearly billing"
      />
      <div className={planStyles.optionsWrapper}>
        {plans.map((plan, index) => (
          <ClickableDiv key={index} onClick={handleClick}>
            <Card
              src={plan.src}
              title={plan.title}
              price={plan.price}
              id={plan.type[index]}
            />
          </ClickableDiv>
        ))}
      </div>
      <div className={planStyles.switchWrapper}>
        <p>Monthly</p>
        <label className={planStyles.switch}>
          <input type="checkbox" />
          <span className={`${planStyles.slider} ${planStyles.round}`}></span>
        </label>
        <p>Yearly</p>
      </div>
      <div className={buttonStyles.navigationWrapper}>
        <Button
          text="Go back"
          color="transparent"
          textColor="hsl(213, 96%, 18%)"
          click={props.handlePrevStep}
        />
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          click={props.handleNextStep}
        />
      </div>
    </Wrapper>
  );
};

export default Plan;
