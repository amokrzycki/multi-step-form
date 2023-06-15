import { Reducer } from "redux";
import FormData from "../interfaces/FormInterface";
import { ActionTypes, SetFormDataAction, SetStepAction } from "./actions";
import Billing from "../enums/Billing";
import Plan from "../enums/Plan";

export interface AppState {
  formData: FormData;
  step: number;
}

const initialState: AppState = {
  formData: {
    name: "",
    email: "",
    number: "",
    billing: Billing.MONTHLY,
    plan: Plan.ARCADE,
    addons: [],
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
