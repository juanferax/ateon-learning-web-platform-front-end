import React from "react";
import ateonLogo from "../assets/images/ateon_logo.png";
import ateonText from "../assets/images/ateon_text.png";
import HomeIcon from "../assets/images/icons/icon_home.svg?react";
import ChatIcon from "../assets/images/icons/icon_chats.svg?react";
import CoursesIcon from "../assets/images/icons/icon_courses.svg?react";
import ScheduleIcon from "../assets/images/icons/icon_schedule.svg?react";
import NotificationIcon from "../assets/images/icons/icon_notification.svg?react";
import UnfoldIcon from "../assets/images/icons/icon_unfold.svg?react";
import defaultPfp from "../assets/images/default_pfp.png";
import NavBarButton from "./NavBarButton";

function Header() {
  return (
    <div className="z-50 sticky top-0 w-full h-20 flex items-center justify-between border">
      {/* Logo */}
      <div className="flex items-center">
        <img src={ateonLogo} className="h-12 pl-5 pr-3" alt="Logo Ateon" />
        <img src={ateonText} className="h-5" alt="Ateon" />
      </div>
      {/* Navigation Bar */}
      <div>
        <div className="flex items-center rounded-lg h-12 bg-secondaries-2">
          <NavBarButton section="Home" icon={HomeIcon} />
          <NavBarButton section="Courses" icon={CoursesIcon} />
          <NavBarButton section="Chats" icon={ChatIcon} />
          <NavBarButton section="Schedule" icon={ScheduleIcon} />
        </div>
        <div
          className="rounded-lg mt-2 bg-secondaries-3"
          style={{ height: 6 }}
        ></div>
      </div>
      {/* Profile */}
      <div className="flex">
        <NotificationIcon />
        <img
          src={defaultPfp}
          height={56}
          width={56}
          className="rounded-full block"
          alt="Profile picture"
        />
        <p className="pr-5">Profile</p>
      </div>
    </div>
  );
}

export default Header;
