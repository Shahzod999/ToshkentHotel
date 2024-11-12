import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store";

export interface Toast {
  id: string;
  text: string;
  state: "error" | "success" | "info";
}

interface ToastState {
  messages: Toast[];
}

const initialState: ToastState = {
  messages: [],
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    succesToast: (state, action) => {
      state.messages.push({ id: uuidv4(), text: action.payload, state: "success" })
    },
    errorToast: (state, action) => {
      state.messages.push({ id: uuidv4(), text: action.payload, state: "error" })
    },
    infoToast: (state, action) => {
      state.messages.push({ id: uuidv4(), text: action.payload, state: "info" })
    },
    removeToast: (state, action) => {
      state.messages = state.messages.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const { removeToast, succesToast, errorToast, infoToast } = toastSlice.actions;
export const selectToastMessages = (state: RootState) => state.toast.messages;
export default toastSlice.reducer;
