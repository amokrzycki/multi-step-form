import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { formDataReducer, stepReducer } from "./reducers";

const rootReducer = combineReducers({
  formData: formDataReducer,
  step: stepReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
