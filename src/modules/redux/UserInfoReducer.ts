import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./RootReducer.ts";

interface UserInfoStateType {
  authenticated: boolean;
  initialized: boolean;

  username: string;
  accessToken: string;
}

const initialState: UserInfoStateType = {
  authenticated: false,
  initialized: false,

  username: '',
  accessToken: ''
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    signIn: (state: UserInfoStateType, action: PayloadAction<UserInfoStateType>) => {
      state.authenticated = true;
      state.username = action.payload.username;
      state.accessToken = action.payload.accessToken;
    },

    completeInitialization: (state: UserInfoStateType, action: PayloadAction<boolean>) => {
      state.initialized = true;
      state.authenticated = action.payload;
    }
  }
});

export const actions = userInfoSlice.actions;
export const authenticated = (state: RootState) => state.userInfoReducer.authenticated;
export const initialized = (state: RootState) => state.userInfoReducer.initialized;
export default userInfoSlice.reducer;
