import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthService() {
  const navigate = useNavigate();

  // Login endpoint
  const loginUrl = "http://localhost:3000/ateon-api/v1/auth/login";

  const login = (data) => {
    var success = false;
    axios
      .post(loginUrl, data)
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
        success = true;
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al hacer la petición:", error);
      });
    return success;
  };

  return {
    login,
  };
}

export default AuthService;
