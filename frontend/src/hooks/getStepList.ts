import FormService from "../services/FormService.ts";
import StepType from "../types/StepType.ts";

const getStepList = async () => {
  let steps: Array<StepType> = [];
  try {
    const response = await FormService.getSteps();
    steps = response.data;
    return steps;
  } catch (error) {
    console.log(error);
    return []; // Return an empty array in case of an error
  }
};

export default getStepList;
