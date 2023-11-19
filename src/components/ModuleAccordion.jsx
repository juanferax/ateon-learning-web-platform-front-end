import React, { useState } from "react";
import DropdownIcon from "../assets/images/icons/icon_module_dropdown.svg?react";
import TopicAccordion from "./TopicAccordion";

function ModuleAccordion({ info }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="w-full text-left transition duration-300 font-semibold text-xl pt-8"
        onClick={toggleAccordion}
      >
        {info.name}
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
          <p>{info.description}</p>
          {info.topics.map((topic, idx) => {
            return (
              <div key={idx} className="pt-5">
                <p className="text-lg font-semibold">{topic.name}</p>
                <TopicAccordion type="Resources" info={topic.resources} />
                <TopicAccordion type="Deliverables" info={topic.resources} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ModuleAccordion;
