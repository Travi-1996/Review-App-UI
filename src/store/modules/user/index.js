import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { UserApi } from "./api";
import { AppConsts } from "../../../components/AppConsts";

const sliceName = "user";

const initialState = {
  appTitle: "",
  session: {
    authenticated: false,
    userInfo: {},
    isLoading: false,
  },
};

export const loginApi = createAsyncThunk(`${sliceName}/loginApi`, UserApi.loginApi);

export const setTitle = createAction(`${sliceName}/setTitle`);
export const setUserInfo = createAction(`${sliceName}/setUserInfo`);

export const userSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setTitle: (state, { payload }) => {
      state.appTitle = payload;
    },
    setUserInfo: (state, { payload }) => {
      state.session = { ...state.session, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginApi.pending, (state, { payload }) => {
      state.session.isLoading = true;
      state.session = null;
    });
    builder.addCase(loginApi.rejected, (state, { payload }) => {
      state.session.isLoading = false;
      state.session = null;
    });
    builder.addCase(loginApi.fulfilled, (state, { payload }) => {
      let isLoadingdata = {isLoading: false};
      const userInfo = payload ? JSON.stringify(payload) : "";
      localStorage.setItem(AppConsts.USER_INFO, userInfo);
      state.session = { ...state.session, ...payload, ...isLoadingdata };
    });
  },
});
