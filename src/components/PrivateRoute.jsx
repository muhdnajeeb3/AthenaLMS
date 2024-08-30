import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const studentLogin = useSelector((state) => state.studentLogin);
  const { studentInfo } = studentLogin;

  return studentInfo ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
