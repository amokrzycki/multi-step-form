import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BillingEnum from "../enums/BillingEnum";

interface AppState {
  personalInfo: {
    name: string;
    email: string;
    number: string;
  };
  planInfo: {
    billing: BillingEnum;
    billingPrice: number;
    plan: string;
  };
  addonsSelected: string[];
  total: number;
  step: number;
  lastStep: number;
}

const initialState: AppState = {
  personalInfo: {
    name: "",
    email: "",
    number: "",
  },
  planInfo: {
    billing: BillingEnum.Monthly,
    billingPrice: 0,
    plan: "",
  },
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
      state.personalInfo.name = action.payload.name;
      state.personalInfo.email = action.payload.email;
      state.personalInfo.number = action.payload.number;
    },
    setPlanInfo: (
      state,
      action: PayloadAction<{
        billing: BillingEnum;
        billingPrice: number;
        plan: string;
      }>
    ) => {
      state.planInfo.billing = action.payload.billing;
      state.planInfo.billingPrice = action.payload.billingPrice;
      state.planInfo.plan = action.payload.plan;
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
  setPlanInfo,
  addAddon,
  removeAddon,
  resetAddons,
  setStep,
  setTotal,
  setPrevStep,
  setNextStep,
  setLastStep,
} = appSlice.actions;
