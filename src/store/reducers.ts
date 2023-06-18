import { Reducer } from "redux";
import FormData from "../interfaces/FormInterface";
import { ActionTypes, SetFormDataAction, SetStepAction } from "./actions";
import BillingEnum from "../enums/BillingEnum";

export interface AppState {
  formData: FormData;
  step: number;
}

const initialState: AppState = {
  formData: {
    name: "",
    email: "",
    number: "",
    billing: BillingEnum[0],
    billingPrice: 0,
    plan: "",
    addons: [],
    prices: [],
    total: 0,
  },
  step: 1,
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

export const stepReducer: Reducer<AppState["step"], SetStepAction> = (
  state = initialState.step,
  action
) => {
  switch (action.type) {
    case ActionTypes.SET_STEP:
      return action.payload;
    default:
      return state;
  }
};
