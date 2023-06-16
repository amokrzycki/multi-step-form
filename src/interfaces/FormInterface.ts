import Billing from "../enums/Billing";
import Plan from "../enums/Plan";

interface FormInterface {
  name: string;
  email: string;
  number: string;
  billing: Billing;
  plan: Plan;
  addons: string[];
}

export default FormInterface;
