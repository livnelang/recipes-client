import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface LoggedUser {
  name: string;
  lastName: string;
  token: string;
}

export interface AuthenticationState {
  loggedUser: LoggedUser | null;
}

const authenticationInitialState: AuthenticationState = {
  loggedUser: null,
};

// SLICES
const authSlice = createSlice({
  name: "authData",
  initialState: authenticationInitialState,
  reducers: {
    setUser: (
      state,
      { payload }: PayloadAction<{ loggedUser: LoggedUser }>
    ) => {
      state.loggedUser = payload.loggedUser;
      //   localStorage.setItem("user", JSON.stringify(payload.loggedUser));
    },
    // isLoggedUser: () => {
    //     localStorage.getItem("user") !== null;
    // },
  },
});

// ACTIONS
export const { setUser } = authSlice.actions;

// REDUCER
export default authSlice;
