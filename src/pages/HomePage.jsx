import React, { useEffect, useState } from "react";
import mascot from "../assets/images/ateon_mascot.png";
import mascotFloor from "../assets/images/mascot_floor.svg";
import ChatIcon from "../assets/images/icons/icon_chats.svg?react";
import CoursesIcon from "../assets/images/icons/icon_courses.svg?react";
import ScheduleIcon from "../assets/images/icons/icon_schedule.svg?react";

function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex-grow">
      <div className="flex flex-col h-full">
        {/* Welcome Mascot */}
        <div className="h-72 flex px-5">
          <div className="">
            <img
              src={mascotFloor}
              alt=""
              className="relative"
              style={{ top: 155, height: 15 }}
            />
            <img
              src={mascot}
              alt=""
              className="absolute"
              style={{ height: 150 }}
            />
          </div>
          <div className="text-[#162A6E] flex-grow flex flex-col justify-center">
            <p className="text-3xl">Good evening {user && user.name}.</p>
            <p className="text-4xl font-medium pt-4">11:30 p.m.</p>
            <p className="">Wednesday, October 27th 2023</p>
          </div>
        </div>
        {/* Content */}
        <div className="bg-[#F1F7FC] rounded-lg text-left px-7 h-full">
          <div className="h-1/3 flex items-center">
            <div className="w-12 mr-2">
              <CoursesIcon fill="#6652FA" height={30} />
            </div>
            <div>
              <p className="text-2xl text-[#4938CE] font-medium">Courses</p>
              <p className="text-lg pt-1">No courses registered yet</p>
            </div>
          </div>
          <hr className="border-[#162A6E] border-opacity-50 border-[1.5px]" />
          <div className="h-1/3 flex items-center">
            <div className="w-12 mr-2">
              <ChatIcon fill="#6652FA" height={30} />
            </div>
            <div>
              <p className="text-2xl text-[#4938CE] font-medium">Chats</p>
              <p className="text-lg pt-1">No chats registered yet</p>
            </div>
          </div>
          <hr className="border-[#162A6E] border-opacity-50 border-[1.5px]" />
          <div className="h-1/3 flex items-center">
            <div className="w-12 mr-2">
              <ScheduleIcon fill="#6652FA" height={30} />
            </div>
            <div>
              <p className="text-2xl text-[#4938CE] font-medium">Schedule</p>
              <p className="text-lg pt-1">No events registered yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
