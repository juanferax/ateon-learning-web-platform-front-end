import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthService() {
  const navigate = useNavigate();

  // Auth endpoint
  const authUrl = "http://localhost:3000/ateon-api/v1/auth";

  const login = async (data) => {
    var error = false;

    try {
      const response = await axios.post(`${authUrl}/login`, data);
      console.log("Respuesta del servidor:", response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      const user = await getLoggedInUser();
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    } catch (err) {
      console.error("Error al hacer la petición:", err);
      error = true;
    }

    return error;
  };

  const getLoggedInUser = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(`${authUrl}/user-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Respuesta del servidor:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error al hacer la petición:", error);
    }
  };

  const validateTokenExp = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(`${authUrl}/validate-token-exp`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Respuesta del servidor:", response.data.stillValid);
      return response.data.stillValid;
    } catch (error) {
      console.error("Error al hacer la petición:", error);
    }
  };

  const refreshToken = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(`${authUrl}/refresh-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Respuesta del servidor:", response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      return response.data;
    } catch (error) {
      console.error("Error al hacer la petición:", error);
    }
  };

  return {
    login,
    getLoggedInUser,
    validateTokenExp,
    refreshToken,
  };
}

export default AuthService;
