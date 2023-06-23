import { Routes, Route } from "react-router-dom";
import { UsersIndex } from "../components/users/UsersIndex";
import { UserDetails } from "../components/users/UserDetails";
import { Profile } from "../components/profile/Profile";
import { Login } from "../components/auth/Login";
import { RouteLayout } from "./RouteLayout";
import { AppConsts } from "../components/AppConsts";

export const PrivateRouteConfig = [
  {
    name: "users",
    path: "/users",
    element: <UsersIndex />,
    exact: true,
  },
  {
    name: "user-details",
    path: "/user/:id",
    element: <UserDetails />,
    exact: true,
  },
  {
    name: "my-account",
    path: "/my-account",
    element: <Profile />,
    exact: true,
  },
  {
    name: "/",
    path: "/",
    element: <UsersIndex />,
    exact: true,
  },
  {
    name: "home",
    path: "*",
    element: <UsersIndex />,
    exact: true,
  },
];

export const PublicRouteConfig = [
  {
    name: "login",
    path: "/login",
    element: <Login />,
    exact: true,
  },
  {
    name: "sign-up",
    path: "/sign-up",
    element: <Login />,
    exact: true,
  },
  {
    name: "sign-in",
    path: "/sign-in",
    element: <Login />,
    exact: true,
  },
  {
    name: "login",
    path: "*",
    element: <Login />,
    exact: true,
  },
];

export const AppRoutes = () => {
  const userInfo = localStorage.getItem(AppConsts.USER_INFO) !== "" ? JSON.parse(localStorage.getItem(AppConsts.USER_INFO)) : false

  return (
    <Routes>
      {userInfo ? (
        <Route element={<RouteLayout />}>
          {PrivateRouteConfig.map(({ name, path, exact, element }) => (
            <Route key={name} exact={exact} path={path} element={element} />
          ))}
        </Route>
      ) : (
        <Route>
          {PublicRouteConfig.map(({ name, path, element }) => (
            <Route key={name} path={path} element={element} />
          ))}
        </Route>
      )}
      ;
    </Routes>
  );
};
