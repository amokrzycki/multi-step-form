import { Reducer } from "redux";
import BillingEnum from "../enums/BillingEnum";
import { ActionTypes, AppAction } from "./actions";

export interface AppState {
  name: string;
  email: string;
  number: string;
  billing: BillingEnum;
  billingPrice: number;
  plan: string;
  addonsSelected: string[];
  addonsPrices: number[];
  total: number;
  step: number;
}

const initialState: AppState = {
  name: "",
  email: "",
  number: "",
  billing: BillingEnum.Monthly,
  billingPrice: 0,
  plan: "",
  addonsSelected: [],
  addonsPrices: [],
  total: 0,
  step: 3,
};

export const appReducer: Reducer<AppState, AppAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.SET_NAME:
      return { ...state, name: action.payload };
    case ActionTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    case ActionTypes.SET_NUMBER:
      return { ...state, number: action.payload };
    case ActionTypes.SET_BILLING:
      return { ...state, billing: action.payload };
    case ActionTypes.SET_BILLING_PRICE:
      return { ...state, billingPrice: action.payload };
    case ActionTypes.SET_PLAN:
      return { ...state, plan: action.payload };
    case ActionTypes.ADD_ADDON:
      return {
        ...state,
        addonsSelected: [...state.addonsSelected, action.payload],
      };
    case ActionTypes.REMOVE_ADDON:
      return {
        ...state,
        addonsSelected: state.addonsSelected.filter(
          (addon) => addon !== action.payload
        ),
      };
    case ActionTypes.ADD_ADDON_PRICE:
      return {
        ...state,
        addonsPrices: [...state.addonsPrices, action.payload],
      };
    case ActionTypes.REMOVE_ADDON_PRICE:
      return {
        ...state,
        addonsPrices: state.addonsPrices.filter((price, index) => {
          if (
            price === action.payload &&
            index === state.addonsPrices.indexOf(action.payload)
          ) {
            return false; // Exclude the first occurrence of action.payload
          }
          return true; // Include all other elements
        }),
      };
    case ActionTypes.SET_TOTAL:
      return { ...state, total: action.payload };
    case ActionTypes.SET_STEP:
      return { ...state, step: action.payload };
    default:
      return state;
  }
};
