import { combineReducers } from "redux";

import accountInfoSlice from "./accountInfoReducer";

const rootReducer = combineReducers({
  accountInfoReducer: accountInfoSlice.reducer,
});

export { rootReducer };

export type RootState = ReturnType<typeof rootReducer>;
