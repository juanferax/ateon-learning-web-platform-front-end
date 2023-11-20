import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import { useEffect } from "react";

const base = "/login";

function RequireAuth({ children }) {
  const authService = AuthService();
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenValidity = async () => {
      if (!token) {
        // No hay token, redirige a la página de login
        navigate(base + "?error");
        return;
      }

      const isTokenValid = await authService.validateTokenExp();

      if (!isTokenValid) {
        console.log("Token expirado");
        // El token ya expiró, intenta actualizarlo
        try {
          await authService.refreshToken();
        } catch (error) {
          console.error("Error al actualizar el token:", error);
        }
      }
    };

    checkTokenValidity();
  }, [token, navigate, authService]);

  return children;
}

export default RequireAuth;
