import { setupListeners } from "@reduxjs/toolkit/query/react";
import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);

export { store };

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
