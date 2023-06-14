import { Routes, Route } from "react-router-dom";
import { UsersIndex } from "../components/users/UsersIndex";
import { UserDetails } from "../components/users/UserDetails";
import { Profile } from "../components/profile/Profile";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<UsersIndex />} />
      <Route path="/user/:id" element={<UserDetails />} />
      <Route path="/my-account" element={<Profile />} />
    </Routes>
  );
};
