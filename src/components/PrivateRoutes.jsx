import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export const PrivateRoutes = () => {
  const { isAuth } = useContext(AuthContext);
  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};
