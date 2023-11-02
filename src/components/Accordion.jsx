import React, { useState } from "react";
import DropdownIcon from "../assets/images/icons/icon_module_dropdown.svg?react";

function Accordion({ info }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="w-full text-left transition duration-300 font-semibold text-xl"
        onClick={toggleAccordion}
      >
        {info.title}
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
        <div className="p-5 pt-7">
          <p>{info.summary}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
