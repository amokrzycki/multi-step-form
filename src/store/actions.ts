import { Action } from "redux";
import BillingEnum from "../enums/BillingEnum";

export enum ActionTypes {
  SET_NAME = "SET_NAME",
  SET_EMAIL = "SET_EMAIL",
  SET_NUMBER = "SET_NUMBER",
  SET_BILLING = "SET_BILLING",
  SET_BILLING_PRICE = "SET_BILLING_PRICE",
  SET_PLAN = "SET_PLAN",
  ADD_ADDON = "ADD_ADDON",
  REMOVE_ADDON = "REMOVE_ADDON",
  SET_ADDONS_PRICES = "SET_ADDONS_PRICES",
  SET_TOTAL = "SET_TOTAL",
  SET_STEP = "SET_STEP",
}

export interface SetNameAction extends Action<ActionTypes.SET_NAME> {
  payload: string;
}

export interface SetEmailAction extends Action<ActionTypes.SET_EMAIL> {
  payload: string;
}

export interface SetNumberAction extends Action<ActionTypes.SET_NUMBER> {
  payload: string;
}

export interface SetBillingAction extends Action<ActionTypes.SET_BILLING> {
  payload: BillingEnum;
}

export interface SetBillingPriceAction
  extends Action<ActionTypes.SET_BILLING_PRICE> {
  payload: number;
}

export interface SetPlanAction extends Action<ActionTypes.SET_PLAN> {
  payload: string;
}

export interface AddAddonAction extends Action<ActionTypes.ADD_ADDON> {
  payload: string;
}

export interface RemoveAddonAction extends Action<ActionTypes.REMOVE_ADDON> {
  payload: string;
}

export interface SetAddonsPricesAction
  extends Action<ActionTypes.SET_ADDONS_PRICES> {
  payload: number[];
}

export interface SetTotalAction extends Action<ActionTypes.SET_TOTAL> {
  payload: number;
}

export interface SetStepAction extends Action<ActionTypes.SET_STEP> {
  payload: number;
}

export type AppAction =
  | SetNameAction
  | SetEmailAction
  | SetNumberAction
  | SetBillingAction
  | SetBillingPriceAction
  | SetPlanAction
  | AddAddonAction
  | RemoveAddonAction
  | SetAddonsPricesAction
  | SetTotalAction
  | SetStepAction;

export function setName(name: string): SetNameAction {
  return {
    type: ActionTypes.SET_NAME,
    payload: name,
  };
}

export function setEmail(email: string): SetEmailAction {
  return {
    type: ActionTypes.SET_EMAIL,
    payload: email,
  };
}

export function setNumber(number: string): SetNumberAction {
  return {
    type: ActionTypes.SET_NUMBER,
    payload: number,
  };
}

export function setBilling(billing: BillingEnum): SetBillingAction {
  return {
    type: ActionTypes.SET_BILLING,
    payload: billing,
  };
}

export function setBillingPrice(price: number): SetBillingPriceAction {
  return {
    type: ActionTypes.SET_BILLING_PRICE,
    payload: price,
  };
}

export function setPlan(plan: string): SetPlanAction {
  return {
    type: ActionTypes.SET_PLAN,
    payload: plan,
  };
}

export function addAddon(addon: string): AddAddonAction {
  return {
    type: ActionTypes.ADD_ADDON,
    payload: addon,
  };
}

export function removeAddon(addon: string): RemoveAddonAction {
  return {
    type: ActionTypes.REMOVE_ADDON,
    payload: addon,
  };
}

export function setAddonsPrices(prices: number[]): SetAddonsPricesAction {
  return {
    type: ActionTypes.SET_ADDONS_PRICES,
    payload: prices,
  };
}

export function setTotal(total: number): SetTotalAction {
  return {
    type: ActionTypes.SET_TOTAL,
    payload: total,
  };
}

export function setStep(step: number): SetStepAction {
  return {
    type: ActionTypes.SET_STEP,
    payload: step,
  };
}
