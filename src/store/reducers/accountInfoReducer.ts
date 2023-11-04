import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserMockTypes } from "/@/common";

interface stateUser {
  user: UserMockTypes;
  role: string;
}

const initialState: stateUser = {
  user: {
    id: 0,
    email: "",
    password: "",
    token: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  },
  role: "unauth",
};

const accountInfoSlice = createSlice({
  name: "accountInfo",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<UserMockTypes>) => {
      state.user = action.payload;
    },
  },
});

export const { setAuth, setUserInfo } = accountInfoSlice.actions;
export default accountInfoSlice;
export type { stateUser };
export { initialState };
