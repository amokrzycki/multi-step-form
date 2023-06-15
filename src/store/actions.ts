import { Action } from "redux";
import FormData from "../interfaces/FormInterface";

export enum ActionTypes {
  SET_FORM_DATA = "SET_FORM_DATA",
  SET_STEP = "SET_STEP",
}

export interface SetFormDataAction extends Action<ActionTypes.SET_FORM_DATA> {
  payload: FormData;
}

export interface SetStepAction extends Action<ActionTypes.SET_STEP> {
  payload: number;
}

export const setFormData = (data: FormData): SetFormDataAction => ({
  type: ActionTypes.SET_FORM_DATA,
  payload: data,
});

export const setStep = (step: number): SetStepAction => ({
  type: ActionTypes.SET_STEP,
  payload: step,
});
