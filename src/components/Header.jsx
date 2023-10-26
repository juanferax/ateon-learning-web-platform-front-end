import React from "react";
import ateonLogo from "../assets/images/ateon_logo.png";
import ateonText from "../assets/images/ateon_text.png";
import HomeIcon from "../assets/images/icons/icon_home.svg?react";
import ChatIcon from "../assets/images/icons/icon_chats.svg?react";
import CoursesIcon from "../assets/images/icons/icon_courses.svg?react";
import ScheduleIcon from "../assets/images/icons/icon_schedule.svg?react";
import NotificationIcon from "../assets/images/icons/icon_notification.svg?react";

import NavBarButton from "./NavBarButton";
import ProfileMenu from "./ProfileMenu";

function Header() {
  return (
    <div className="z-50 sticky top-0 w-full h-24 flex items-center justify-between px-7 mb-3 bg-white py-3">
      {/* Logo */}
      <div className="flex items-center pb-[14px]">
        <img src={ateonLogo} className="h-12 pr-3" alt="Logo Ateon" />
        <img src={ateonText} className="h-6" alt="Ateon" />
      </div>
      {/* Navigation Bar */}
      <div>
        <div className="flex items-center rounded-lg h-12 bg-[#F1F7FC]">
          <NavBarButton section="Home" icon={HomeIcon} />
          <NavBarButton section="Courses" icon={CoursesIcon} />
          <NavBarButton section="Chats" icon={ChatIcon} />
          <NavBarButton section="Schedule" icon={ScheduleIcon} />
        </div>
        <div
          className="rounded-lg mt-2 bg-[#DBEAF8]"
          style={{ height: 6 }}
        ></div>
      </div>
      {/* Profile */}
      <div className="flex items-center pb-[14px]">
        <NotificationIcon fill="#6652FA" className="mr-8" />
        <ProfileMenu />
      </div>
    </div>
  );
}

export default Header;
