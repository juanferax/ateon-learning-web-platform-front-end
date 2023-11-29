import React, { useState } from "react";
import UnfoldIcon from "../assets/images/icons/icon_unfold_light.svg?react";
import FoldIcon from "../assets/images/icons/icon_fold.svg?react";
import LogoutIcon from "../assets/images/icons/icon_logout.svg?react";
import ProfileIcon from "../assets/images/icons/icon_profile.svg?react";
import HelpIcon from "../assets/images/icons/icon_help.svg?react";
import SettingsIcon from "../assets/images/icons/icon_settings.svg?react";
import SuggestionsIcon from "../assets/images/icons/icon_suggestions.svg?react";
import defaultPfp from "../assets/images/default_pfp.png";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

function ProfileMenu() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("lastVisitedCourse");
    navigate("/login");
  };

  return (
    <div className="flex items-center pb-[14px] relative min-w-[200px] mt-4">
      <div
        className={`flex items-center rounded-3xl p-1 pr-2 ${
          openMenu ? "bg-[#6652FA]" : ""
        }`}
      >
        <div
          className="circle-image mr-3"
          style={{
            backgroundImage: `url(${
              user.profilePhotoURL ? user.profilePhotoURL : defaultPfp
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "50%",
            borderWidth: "2px",
            borderColor: "#FFFFFF",
            height: 38,
            width: 38,
          }}
        ></div>
        <p
          className={`pr-5 text-[#162A6E] font-semibold ${
            openMenu ? "text-white" : ""
          }`}
        >
          {user && user.name}
        </p>
        {openMenu ? (
          <FoldIcon fill="#6652FA" onClick={() => handleOpenMenu()} />
        ) : (
          <UnfoldIcon fill="#6652FA" onClick={() => handleOpenMenu()} />
        )}
      </div>
      {openMenu && (
        <div className="absolute top-[51px] bg-[#6652FA] w-full text-left rounded-lg text-white">
          <div className="flex hover:bg-[#4534C7] rounded-t-lg cursor-pointer p-2 px-3 items-center">
            <ProfileIcon />
            <p className="pl-2 text-sm">View profile</p>
          </div>
          <div className="flex hover:bg-[#4534C7] cursor-pointer p-2 px-3 items-center">
            <HelpIcon />
            <p className="pl-2 text-sm">Help</p>
          </div>
          <div className="flex hover:bg-[#4534C7] cursor-pointer p-2 px-3 items-center">
            <SettingsIcon />
            <p className="pl-2 text-sm">Settings</p>
          </div>
          <div className="flex hover:bg-[#4534C7] cursor-pointer p-2 px-3 items-center">
            <SuggestionsIcon />
            <p className="pl-2 text-sm">Send suggestions</p>
          </div>
          <hr className="m-2" />
          <div className="p-2">
            <Button
              className="w-full"
              variant="contained"
              style={{
                textTransform: "none",
                backgroundColor: "#F5506E",
                fontWeight: "normal",
                fontFamily: "Poppins",
                justifyContent: "flex-start",
              }}
              onClick={() => handleLogout()}
            >
              <LogoutIcon />
              <p className="w-full text-center">Logout</p>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
