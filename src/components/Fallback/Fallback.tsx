import Headline from "../../layout/Headline/Headline";
import Wrapper from "../../layout/Wrapper/Wrapper";

const Fallback = () => {
  return (
    <Wrapper>
      <Headline
        title="Something went wrong!"
        description="Brace yourself till we get the error fixed!"
      />
    </Wrapper>
  );
};

export default Fallback;
