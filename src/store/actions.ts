import { Action } from "redux";
import FormType from "../types/FormType";

export enum ActionTypes {
  SET_FORM_DATA = "SET_FORM_DATA",
}

export interface SetFormDataAction extends Action<ActionTypes.SET_FORM_DATA> {
  payload: FormType;
}

export const setFormData = (data: FormType): SetFormDataAction => ({
  type: ActionTypes.SET_FORM_DATA,
  payload: data,
});
