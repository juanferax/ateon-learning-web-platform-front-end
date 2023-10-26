import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthService() {
  const navigate = useNavigate();

  // Login endpoint
  const loginUrl = "http://localhost:3000/ateon-api/v1/auth/login";

  const login = async (data) => {
    var error = false;
    await axios
      .post(loginUrl, data)
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/");
      })
      .catch((err) => {
        console.error("Error al hacer la petición:", err);
        error = true;
      });
    return error;
  };

  return {
    login,
  };
}

export default AuthService;
