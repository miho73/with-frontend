import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./RootReducer.ts";

interface UserInfoStateType {
  authenticated: boolean;
  initialized: boolean;

  username: string;
  jwt: string;
}

const initialState: UserInfoStateType = {
  authenticated: false,
  initialized: false,

  username: '',
  jwt: ''
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    signIn: (state: UserInfoStateType, action: PayloadAction<UserInfoStateType>) => {
      state.authenticated = true;
      state.username = action.payload.username;
      state.jwt = action.payload.jwt;
    },

    completeInitialization: (state: UserInfoStateType, action: PayloadAction<boolean>) => {
      state.initialized = true;
      state.authenticated = action.payload;
    },

    signOut: (state: UserInfoStateType) => {
      state.authenticated = false;
      state.username = '';
      state.jwt = '';
    }
  }
});

export const actions = userInfoSlice.actions;
export const authenticated = (state: RootState) => state.userInfoReducer.authenticated;
export const initialized = (state: RootState) => state.userInfoReducer.initialized;
export default userInfoSlice.reducer;
