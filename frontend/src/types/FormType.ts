interface FormType {
  name: string;
  email: string;
  number: string;
  billing: string;
  billingPrice: number;
  plan: string;
  addonsSelected: string[];
  total: number;
}

export default FormType;
