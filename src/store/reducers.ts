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
  lastStep: number;
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
  step: 1,
  lastStep: 1,
};

export const appReducer: Reducer<AppState, AppAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        number: action.payload.number,
      };
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
          return !(
            price === action.payload &&
            index === state.addonsPrices.indexOf(action.payload)
          );
          // Include all other elements
        }),
      };
    case ActionTypes.SET_TOTAL:
      return { ...state, total: action.payload };
    case ActionTypes.SET_STEP:
      return { ...state, step: action.payload };
    case ActionTypes.SET_LAST_STEP:
      return { ...state, lastStep: action.payload };
    default:
      return state;
  }
};
