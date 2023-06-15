import Addons from "../enums/Addons";
import Billing from "../enums/Billing";
import Plan from "../enums/Plan";

interface FormInterface {
  name: string;
  email: string;
  number: string;
  billing: Billing;
  plan: Plan;
  addons: Addons[];
}

export default FormInterface;
