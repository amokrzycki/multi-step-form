interface FormType {
  name: string;
  email: string;
  number: string;
  billing: string;
  billingPrice: number;
  plan: string;
  addonsSelected: string[];
  addonsPrices: number[];
  total: number;
}
export default FormType;
