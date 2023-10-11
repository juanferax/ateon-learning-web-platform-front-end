import React from "react";
import emptyLogo from "../assets/images/ateon_logo_empty.svg";

function QuickAccess() {
  return (
    <div className="mx-5 w-[20%]">
      <div className="bg-[#F1F7FC] rounded-lg h-full text-left p-5">
        <p className="text-[#162A6E] font-semibold text-2xl">Quick Access</p>
        <div className="flex flex-col h-full items-center justify-center text-center">
          <p
            className="text-[#B0B0B0] text-2xl font-semibold"
            style={{ width: 200 }}
          >
            Nothing to show yet
          </p>
          <img src={emptyLogo} alt="Ateon logo sleeping" className="pt-3" />
        </div>
      </div>
    </div>
  );
}

export default QuickAccess;
