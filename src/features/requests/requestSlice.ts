import { createSlice } from "@reduxjs/toolkit";
import { RequestParams } from "../../app/models/requestParams";

const initialState: RequestParams = {
  orderBy: "",
  searchTerm: "",
  priority: [] as string[],
  requestType: [] as string[],
  pageNumber: 1,
  pageSize: 8,
};

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    setPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    setPageSize(state, action) {
      state.pageSize = action.payload;
    },
    setPriority(state, action) {
      state.priority = action.payload;
      state.pageNumber = 1;
    },
    setRequestType(state, action) {
      state.requestType = action.payload;
      state.pageNumber = 1;
    },
    setOrderBy(state, action) {
      state.orderBy = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.pageNumber = 1;
    },
    resetParams() {
      return initialState;
    },
  },
});

export const {
  setPageNumber,
  setPageSize,
  setPriority,
  setRequestType,
  setOrderBy,
  setSearchTerm,
  resetParams,
} = requestSlice.actions;
