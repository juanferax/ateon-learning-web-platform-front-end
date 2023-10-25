import React, { useState } from "react";
import loginImg1 from "../assets/images/login_img1.png";
import MailIcon from "../assets/images/icons/icon_mail.svg?react";
import LockIcon from "../assets/images/icons/icon_lock.svg?react";
import AuthService from "../services/AuthService";

import { Alert, Button } from "@mui/material";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const authService = AuthService();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setLoginError(!authService.login({ email: email, password: password }));
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex">
      <div
        className="h-screen w-[800px]"
        style={{
          backgroundImage: `url(${loginImg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="flex flex-col flex-grow px-20 justify-center space-y-6">
        <p className="font-semibold text-[36px] text-left">Sign in</p>
        {loginError && (
          <Alert severity="error">Usuario y/o contraseña inválida</Alert>
        )}
        <form action="" className="space-y-6">
          <div className="border flex h-11 items-center rounded-lg pl-2">
            <MailIcon />
            <input
              type="text"
              placeholder="Email"
              value={email}
              className="pl-2 w-full h-full outline-none rounded-lg text-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="border flex h-11 items-center rounded-lg pl-2">
            <LockIcon />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="pl-2 w-full h-full outline-none rounded-lg text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            variant="contained"
            style={{
              textTransform: "none",
              backgroundColor: "#5A47E7",
              fontWeight: "normal",
            }}
            onClick={(e) => handleLogin(e)}
          >
            Sign in
          </Button>
        </form>
        <p className="text-sm">
          Don't have an account? <a href="">Create one</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
