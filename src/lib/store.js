import { configureStore } from "@reduxjs/toolkit";
import squadSlice from "./squadsList/squadSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      squad: squadSlice,
    },
  });
};
