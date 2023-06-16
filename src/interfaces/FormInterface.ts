import Billing from "../enums/Billing";

interface FormInterface {
  name: string;
  email: string;
  number: string;
  billing: Billing;
  plan: string;
  addons: string[];
}

export default FormInterface;
