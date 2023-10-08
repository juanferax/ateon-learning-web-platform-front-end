import React from "react";
import calendar from "../assets/images/calendar.png";
import mascot from "../assets/images/ateon_mascot.png";
import mascotFloor from "../assets/images/mascot_floor.svg";
import emptyNotes from "../assets/images/logo_empty_notes.svg";
import SendIcon from "../assets/images/icons/icon_send.svg?react";
import DownloadIcon from "../assets/images/icons/icon_download.svg?react";
import ChatIcon from "../assets/images/icons/icon_chats.svg?react";
import CoursesIcon from "../assets/images/icons/icon_courses.svg?react";
import ScheduleIcon from "../assets/images/icons/icon_schedule.svg?react";

function HomePage() {
  return (
    <div className="flex">
      {/* Quick Access */}
      <div className="ml-7 mr-5 mb-3.5" style={{ width: 380 }}>
        <div className="bg-[#F1F7FC] rounded-lg h-full text-left p-5">
          <p className="text-[#162A6E] font-semibold text-2xl">Quick Access</p>
          <div className="flex flex-col h-full items-center justify-center text-center">
            <p
              className="text-[#B0B0B0] text-2xl font-semibold"
              style={{ width: 200 }}
            >
              Nothing to show yet
            </p>
            <img src={emptyNotes} alt="Ateon logo sleeping" className="pt-3" />
          </div>
        </div>
      </div>
      {/* Section Content */}
      <div className="flex-grow">
        {/* Welcome Mascot */}
        <div className="pl-52 h-72 mb-[18.5px]">
          <div>
            <img
              src={mascotFloor}
              alt=""
              className="relative"
              style={{ top: 210, height: 24 }}
            />
            <img src={mascot} alt="" className="absolute" />
          </div>
          <div className="text-[#162A6E]">
            <p className="text-3xl">Good evening John.</p>
            <p className="text-4xl font-medium pt-4">11:30 p.m.</p>
            <p className="">Wednesday, October 27th 2023</p>
          </div>
        </div>
        <div className="bg-[#F1F7FC] rounded-lg text-left h-[478px] px-7">
          <div className="h-1/3 flex items-center">
            <div className="w-20 mr-4">
              <CoursesIcon fill="#6652FA" height={80} />
            </div>
            <div>
              <p className="text-2xl text-[#4938CE] font-medium">Courses</p>
              <p className="text-lg pt-2">No courses registered yet</p>
            </div>
          </div>
          <hr className="border-[#162A6E] border-opacity-50 border-[1.5px]" />
          <div className="h-1/3 flex items-center">
            <div className="w-20 mr-4">
              <ChatIcon fill="#6652FA" height={80} />
            </div>
            <div>
              <p className="text-2xl text-[#4938CE] font-medium">Chats</p>
              <p className="text-lg pt-2">No chats registered yet</p>
            </div>
          </div>
          <hr className="border-[#162A6E] border-opacity-50 border-[1.5px]" />
          <div className="h-1/3 flex items-center">
            <div className="w-20 mr-4">
              <ScheduleIcon fill="#6652FA" height={80} />
            </div>
            <div>
              <p className="text-2xl text-[#4938CE] font-medium">Schedule</p>
              <p className="text-lg pt-2">No events registered yet</p>
            </div>
          </div>
        </div>
      </div>
      {/* Calendar & Notes */}
      <div className="mr-7 ml-5" style={{ width: 350 }}>
        <div className="flex justify-center">
          {/* TODO: Calendar */}
          <img src={calendar} alt="" style={{ width: 350 }} />
        </div>
        {/* TODO: Change color to blue */}
        <hr className="my-5 border-[#0528F2] border-opacity-50" />
        <div>
          <p className="font-semibold text-xl text-left pb-3">Notes:</p>
          <div className="bg-[#F1F7FC] h-96 rounded-t-lg">
            <div className="flex flex-col h-full items-center justify-center">
              <p
                className="text-[#B0B0B0] text-2xl font-semibold"
                style={{ width: 200 }}
              >
                Seems like you don't have any notes
              </p>
              <img
                src={emptyNotes}
                alt="Ateon logo sleeping"
                className="pt-3"
              />
            </div>
          </div>
          <div className="flex bg-[#162A6E] items-center justify-between h-12 px-4 rounded-lg relative bottom-3">
            <DownloadIcon />
            <input
              type="text"
              placeholder="Type something wise..."
              className="rounded-2xl p-1 px-3 w-56 text-sm bg-[#30427E]"
            />
            <SendIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
