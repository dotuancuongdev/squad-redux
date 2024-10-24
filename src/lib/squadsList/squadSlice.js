import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { currentTab: "all", productList: [] };

const squadSlice = createSlice({
  name: "squad",
  initialState,
  reducers: {
    setTab(state, action) {
      state.currentTab = action.payload;
    },
    setProducts(state, action) {
      state.productList = action.payload;
    },
    concatProducts(state, action) {
      state.productList = [...state.productList, ...action.payload];
    },
  },
});

export const { setTab, setProducts } = squadSlice.actions;
export default squadSlice.reducer;
