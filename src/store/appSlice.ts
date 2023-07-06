import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BillingEnum from "../enums/BillingEnum";

interface AppState {
  name: string;
  email: string;
  number: string;
  billing: BillingEnum;
  billingPrice: number;
  plan: string;
  addonsSelected: string[];
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
  total: 0,
  step: 1,
  lastStep: 1,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<{ name: string; email: string; number: string }>
    ) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.number = action.payload.number;
    },
    setBilling: (state, action: PayloadAction<BillingEnum>) => {
      state.billing = action.payload;
    },
    setBillingPrice: (state, action: PayloadAction<number>) => {
      state.billingPrice = action.payload;
    },
    setPlan: (state, action: PayloadAction<string>) => {
      state.plan = action.payload;
    },
    addAddon: (state, action: PayloadAction<string>) => {
      state.addonsSelected.push(action.payload);
    },
    removeAddon: (state, action: PayloadAction<string>) => {
      state.addonsSelected = state.addonsSelected.filter(
        (addon) => addon !== action.payload
      );
    },
    resetAddons: (state) => {
      state.addonsSelected = [];
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setPrevStep: (state) => {
      state.step -= 1;
    },
    setNextStep: (state) => {
      state.step += 1;
    },
    setLastStep: (state, action: PayloadAction<number>) => {
      state.lastStep = action.payload;
    },
  },
});

export const {
  setUserData,
  setBilling,
  setBillingPrice,
  setPlan,
  addAddon,
  removeAddon,
  resetAddons,
  setStep,
  setTotal,
  setPrevStep,
  setNextStep,
  setLastStep,
} = appSlice.actions;
