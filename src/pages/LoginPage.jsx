import React from "react";
import loginImg1 from "../assets/images/login_img1.png";
import MailIcon from "../assets/images/icons/icon_mail.svg?react";
import LockIcon from "../assets/images/icons/icon_lock.svg?react";

import { Button } from "@mui/material";

function LoginPage() {
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
        <div className="border flex h-11 items-center rounded-lg pl-2">
          <MailIcon />
          <input
            type="text"
            placeholder="Email"
            className="pl-2 w-full h-full outline-none rounded-lg text-sm"
          />
        </div>
        <div className="border flex h-11 items-center rounded-lg pl-2">
          <LockIcon />
          <input
            type="password"
            placeholder="Password"
            className="pl-2 w-full h-full outline-none rounded-lg text-sm"
          />
        </div>
        <Button
          variant="contained"
          style={{
            textTransform: "none",
            backgroundColor: "#5A47E7",
            fontWeight: "normal",
          }}
        >
          Sign in
        </Button>
        <p className="text-sm">
          Don't have an account? <a href="">Create one</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
