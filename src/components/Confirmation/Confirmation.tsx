import Wrapper from "../../layout/Wrapper/Wrapper";
import thanks from "./thanks.svg";

const Confirmation = () => {
  return (
    <Wrapper>
      <img src={thanks} style={{ height: "6em" }} alt="Thank you check!" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have
        <br />
        fun using our platform. If you ever need support, please feel
        <br />
        free to email us at support@loremgaming.com.
      </p>
    </Wrapper>
  );
};

export default Confirmation;
