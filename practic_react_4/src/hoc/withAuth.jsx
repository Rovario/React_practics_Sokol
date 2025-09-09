import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const withAuth = (Component) => {
  return (props) => {
    const isAuth = localStorage.getItem("auth") === "true";
    const location = useLocation();

    if (isAuth) {
      return <Component {...props} />;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
  };
};

export default withAuth;
