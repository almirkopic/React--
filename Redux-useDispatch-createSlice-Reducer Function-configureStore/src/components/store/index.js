// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, //managing more reducers
});

export default store;
