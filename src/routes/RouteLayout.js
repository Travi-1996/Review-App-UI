import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AppMain from "../components/AppMain";
import { AppConsts } from "../components/AppConsts";

export const RouteLayout = () => {
  
  const userInfo = JSON.parse(localStorage.getItem(AppConsts.USER_INFO));
  return userInfo ? (
    <AppMain>
      <Outlet />
    </AppMain>
  ) : (
    <Navigate to="/" />
  );
};
