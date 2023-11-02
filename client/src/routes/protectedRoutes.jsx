import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = document.cookie;

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
