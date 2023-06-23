import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./modules/user";
import logger from "redux-logger";
import thunk from "redux-thunk";

let store = null;

const createStore = () => {
  return configureStore({
    reducer: {
      user: userSlice.reducer
    },
    middleware: [thunk, logger],
  });
};

export const getStore = async () => {
  if (store) return store;
  try {
    store = createStore();
    return store;
  } catch (error) {}
  store = createStore();
  return store;
};
