import { Reducer } from "redux";
import { ActionTypes, SetFormDataAction } from "./actions";
import BillingEnum from "../enums/BillingEnum";
import FormType from "../types/FormType";

export interface AppState {
  formData: FormType;
}

const initialState: AppState = {
  formData: {
    name: "",
    email: "",
    number: "",
    billing: BillingEnum.Monthly,
    billingPrice: 0,
    plan: "",
    addons: [],
    addonsPrices: [],
    total: 0,
  },
};

export const formDataReducer: Reducer<
  AppState["formData"],
  SetFormDataAction
> = (state = initialState.formData, action) => {
  switch (action.type) {
    case ActionTypes.SET_FORM_DATA:
      return action.payload;
    default:
      return state;
  }
};
