import React, { useState } from "react";
import DropdownIcon from "../assets/images/icons/icon_module_dropdown.svg?react";

function NoteAccordion({ info }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full text-left p-5">
      <div
        className="transition duration-300 font-semibold text-xl text-[#162A6E]"
        onClick={toggleAccordion}
      >
        {info.groupName}
        <span
          className={`ml-4 mt-2 absolute transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }  
              transition-transform duration-300`}
        >
          <DropdownIcon />
        </span>
      </div>
      {isOpen && (
        <div className="px-2 pt-2">
          {info.notes.map((note, idx) => {
            return (
              <div key={idx} className="flex items-center">
                <svg width="8" height="8">
                  <circle cx="3" cy="3" r="3" fill="#162A6E" />
                </svg>
                <p className="pl-2 text-base">{note}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default NoteAccordion;
