import React from "react";
import courseIcons from "../assets/images/icons/course_card_icons.png";
import { useNavigate } from "react-router-dom";

function CoursesPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-grow">
      <p className="text-left">Active classes</p>
      <div className="pt-5 grid grid-cols-2 gap-4">
        <div
          onClick={() => navigate("/courses/65598bd076a0b6d6be3c2f55")}
          className="rounded-lg h-[188px] text-left bg-[#F1F7FC] flex"
        >
          <div className="p-2 w-full">
            {/* Title */}
            <p className="font-medium w-2/3">Algorithms and Data Structures</p>
            {/* Particpants */}
            <p className="text-sm pt-2">X participants</p>
          </div>
          <div className="flex w-full justify-end">
            <div className="bg-[#F5506E] w-[98px] rounded-r-lg">
              <img src={courseIcons} alt="" className="ml-[60px]" />
            </div>
          </div>
        </div>
        <div className="rounded-lg h-[188px] text-left bg-[#F1F7FC] flex">
          <div className="p-2 w-full">
            {/* Title */}
            <p className="font-medium w-2/3">Object Oriented Programming II</p>
            {/* Particpants */}
            <p className="text-sm pt-2">X participants</p>
          </div>
          <div className="flex w-full justify-end">
            <div className="bg-[#4805A6] w-[98px] rounded-r-lg">
              <img src={courseIcons} alt="" className="ml-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
