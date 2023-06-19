import infoStyles from "./info.module.css";
import { Button, Headline, Wrapper } from "../../layout";
import React from "react";

type Props = {
  tempData: { name: string; email: string; number: string };
  handleTempData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Info = ({ tempData, handleTempData, handleNextStep, change }: Props) => {
  return (
    <Wrapper>
      <Headline
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onBlur={change}
        placeholder="e.g Stephen King"
        onChange={handleTempData}
        value={tempData.name}
      />
      <label htmlFor="email">Email Address</label>
      <input
        type="text"
        name="email"
        onBlur={change}
        placeholder="e.g stephenking@lorem.com"
        onChange={handleTempData}
        value={tempData.email}
      />
      <label htmlFor="number">Phone Number</label>
      <input
        type="text"
        name="number"
        onBlur={change}
        placeholder="e.g +1 234 567 890"
        onChange={handleTempData}
        value={tempData.number}
      />
      <div className={infoStyles.navWrapper}>
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          alignSelf="end"
          click={handleNextStep}
        />
      </div>
    </Wrapper>
  );
};

export default Info;
