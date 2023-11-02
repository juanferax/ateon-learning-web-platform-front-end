import React from "react";
import { useNavigate } from "react-router-dom";

function NavBarButton({ section, icon: Icon }) {
  const navigate = useNavigate();

  return (
    <div
      className="relative group/button"
      onClick={() => navigate("/" + section.toLowerCase())}
    >
      <div
        className="flex items-center justify-center rounded-lg group-hover/button:bg-[#DFF1FF] h-12"
        style={{ width: 150 }}
      >
        <Icon fill="#6652FA" className="pr-2" />
        <p className="font-medium text-[#6652FA]">{section}</p>
      </div>
      <div
        className="absolute group-hover/button:bg-[#6652FA] mt-2 w-full rounded-lg"
        style={{ height: 6 }}
      ></div>
    </div>
  );
}

export default NavBarButton;
