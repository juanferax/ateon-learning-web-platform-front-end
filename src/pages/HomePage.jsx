import React from "react";
import calendar from "../assets/images/calendar.png";
import mascot from "../assets/images/ateon_mascot.png";
import mascotFloor from "../assets/images/mascot_floor.svg";
import emptyNotes from "../assets/images/logo_empty_notes.svg";

function HomePage() {
  return (
    <div className="flex">
      {/* Quick Access */}
      <div className="ml-7 mr-5" style={{ width: 380 }}>
        <div className="bg-[#F1F7FC] rounded-lg h-full text-left p-5">
          <p className="text-[#162A6E] font-semibold text-2xl">Quick Access</p>
        </div>
      </div>
      {/* Section Content */}
      <div className="flex-grow">
        {/* Welcome Mascot */}
        <div className="pl-52">
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
      </div>
      {/* Calendar & Notes */}
      <div className="mr-7 ml-5" style={{ width: 350 }}>
        <div className="flex justify-center">
          {/* TODO: Calendar */}
          <img src={calendar} alt="" style={{ width: 350 }} />
        </div>
        {/* TODO: Change color to blue */}
        <hr className="my-5" />
        <div>
          <p className="font-semibold text-xl text-left pb-3">Notes:</p>
          <div className="bg-[#F1F7FC] h-96 rounded-lg">
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
          <div className="bg-[#162A6E] text-white">Type something wise...</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
