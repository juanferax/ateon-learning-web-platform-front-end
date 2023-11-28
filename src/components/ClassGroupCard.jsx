import React from "react";
import { useNavigate } from "react-router-dom";

function ClassGroupCard({ classGroup, courseId }) {
  const navigate = useNavigate();

  return (
    <div>
      <p className="font-medium text-lg text-[#3E3E3E] pb-2">Group</p>
      <div className="rounded-lg text-left bg-[#F1F7FC]">
        <div className="w-full bg-[#162A6E] text-white rounded-t-lg p-3">
          <div className="flex justify-between font-medium">
            <p>Mon.</p>
            <p>Tue.</p>
            <p>Wed.</p>
            <p>Thu.</p>
            <p>Fri.</p>
          </div>
          <p className="text-center py-1">
            {classGroup.startHour} - {classGroup.endHour}
          </p>
        </div>
        <div className="p-3">
          <a
            className="underline cursor-pointer"
            onClick={() => navigate(`/courses/${courseId}/manage/stats`)}
          >
            View statistics.
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClassGroupCard;
