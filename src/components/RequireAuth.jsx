import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const base = "/login";

function RequireAuth({ children }) {
  if (!localStorage.getItem("accessToken")) {
    return <Navigate to={base + "?error"} />;
  }

  return children;
}

export default RequireAuth;
