import React from "react";
import { UserAuth } from "../contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const { user } = UserAuth();

  return user ? <Outlet /> : <Navigate to="/log-in" />;
};
