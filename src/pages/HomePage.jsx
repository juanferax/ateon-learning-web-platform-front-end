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
    <div className="flex flex-row h-full mb-3">
      {/* Quick Access */}
      <div className="mx-5 w-[20%]">
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
              <p className="text-3xl">Good evening John.</p>
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
      {/* Calendar & Notes */}
      <div className="mx-5 w-[25%]">
        <div className="flex flex-col h-full">
          <div className="flex justify-center">
            {/* TODO: Calendar */}
            <img src={calendar} alt="" style={{ height: 200 }} />
          </div>
          <hr className="my-5 border-[#0528F2] border-opacity-50" />
          {/* Notes */}
          <div className="h-full flex flex-col">
            <p className="font-semibold text-xl text-left pb-3">Notes:</p>
            <div className="flex flex-col h-full">
              <div className="bg-[#F1F7FC] rounded-t-lg h-full">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-[#B0B0B0] text-2xl font-semibold w-4/5">
                    Seems like you don't have any notes
                  </p>
                  <img
                    src={emptyNotes}
                    alt="Ateon logo sleeping"
                    className="pt-3"
                  />
                </div>
              </div>
              <div className="flex bg-[#162A6E] items-center justify-between h-12 px-4 rounded-b-lg relative">
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
      </div>
    </div>
  );
}

export default HomePage;
