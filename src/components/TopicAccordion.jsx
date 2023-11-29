import React, { useState } from "react";
import DropdownIcon from "../assets/images/icons/icon_module_dropdown.svg?react";
import ResourcesIcon from "../assets/images/icons/icon_resources.svg?react";
import DeliverablesIcon from "../assets/images/icons/icon_deliverables.svg?react";

function TopicAccordion({ type, info }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const renderCircles = () => {
    const circles = [];

    for (let i = 0; i < 30; i++) {
      circles.push(
        <circle key={i} cx={i * 40 + 3} cy="3" r="3" fill="#6652FA80" />
      );
    }

    return circles;
  };

  return (
    <div>
      <div
        className="w-full text-left transition duration-300 font-medium text-base pl-5 pt-3"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <div className="w-[25px]">
            {type === "Resources" ? <ResourcesIcon /> : <DeliverablesIcon />}{" "}
          </div>
          <p className="pl-2">{type}</p>
          <span
            className={`${
              type === "Resources" ? "ml-[124px]" : "ml-[142px]"
            } absolute transform ${isOpen ? "rotate-180" : "rotate-0"}  
              transition-transform duration-300`}
          >
            <DropdownIcon />
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="pl-10 pt-2 pb-5 space-y-3">
          {info.map((item, idx) => {
            return (
              <div key={idx} className="flex items-center justify-between">
                <p>{type === "Resources" ? item.text : item.name}</p>
                <span className="overflow-hidden flex-1 mx-3">
                  <svg width="100%" height="8">
                    {renderCircles()}
                  </svg>
                </span>
                <div className="bg-[#F1F7FC] rounded-lg flex">
                  <p className="py-1 px-2 text-sm">status</p>
                  <div
                    className={`w-6 ${
                      item.status === "completed"
                        ? "bg-[#4BDDA8]"
                        : item.status === "pending"
                        ? "bg-[#C1C1C1]"
                        : "bg-[#F4D35E]"
                    } rounded-r-lg`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TopicAccordion;
