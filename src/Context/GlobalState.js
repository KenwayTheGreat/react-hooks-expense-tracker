import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);
