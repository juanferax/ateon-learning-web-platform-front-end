import React from "react";
import courseIcons from "../assets/images/icons/course_card_icons.png";
import { useNavigate } from "react-router";

function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/courses/${course._id}`)}
      className="rounded-lg h-[188px] text-left bg-[#F1F7FC] flex"
    >
      <div className="p-2 w-full">
        <p className="font-medium w-2/3">{course.name}</p>
        <p className="text-sm pt-2">{course.students.length} participants</p>
      </div>
      <div className="flex w-full justify-end">
        <div className="bg-[#F5506E] w-[98px] rounded-r-lg">
          <img src={courseIcons} alt="" className="ml-[60px]" />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
