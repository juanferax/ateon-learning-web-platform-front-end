import React, { useState } from "react";
import signupImg2 from "../assets/images/signup_img2.png";
import UserIcon from "../assets/images/icons/icon_user.svg?react";
import MailIcon from "../assets/images/icons/icon_mail.svg?react";
import LockIcon from "../assets/images/icons/icon_lock.svg?react";
import AuthService from "../services/AuthService";

import { Alert, Button } from "@mui/material";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState(false);

  const authService = AuthService();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      setSignupError(
        !authService.signup({ name: name, email: email, password: password })
      );
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col flex-grow px-20 justify-center space-y-6">
        <p className="font-semibold text-[36px] text-left">Create an account</p>
        {signupError && <Alert severity="error">Ha ocurrido un error</Alert>}
        <form action="" className="space-y-6">
          <div className="border flex h-11 items-center rounded-lg pl-2">
            <UserIcon />
            <input
              type="text"
              placeholder="Name"
              value={name}
              className="pl-2 w-full h-full outline-none rounded-lg text-sm"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              fontFamily: "Poppins",
              fontSize: "16px",
            }}
            onClick={(e) => handleSignup(e)}
          >
            Sign up
          </Button>
        </form>
        <p className="text-sm">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
      <div
        className="h-screen w-[800px]"
        style={{
          backgroundImage: `url(${signupImg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
    </div>
  );
}

export default SignupPage;
