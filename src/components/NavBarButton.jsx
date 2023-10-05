import React from "react";

function NavBarButton({ section, icon: Icon }) {
  return (
    <div className="relative group/button">
      <div
        className="flex items-center justify-center rounded-lg group-hover/button:bg-secondaries-4 h-12"
        style={{ width: 152 }}
      >
        <Icon fill="#6652FA" className="pr-2" />
        <p className="font-medium text-primaries-2">{section}</p>
      </div>
      <div
        className="absolute group-hover/button:bg-primaries-2 mt-2 w-full rounded-lg"
        style={{ height: 6 }}
      ></div>
    </div>
  );
}

export default NavBarButton;
