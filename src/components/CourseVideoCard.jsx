import React from "react";
import videoCard from "../assets/images/video_card.png";

function CourseVideoCard({ video }) {
  return (
    <div className="shrink-0">
      <img src={videoCard} alt="" />
      <p className="font-medium text-sm text-[#797979] pt-2">{video.title}</p>
    </div>
  );
}

export default CourseVideoCard;
