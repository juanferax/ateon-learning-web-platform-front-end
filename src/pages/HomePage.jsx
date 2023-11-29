import React, { useEffect, useState } from "react";
import mascot from "../assets/images/ateon_mascot.png";
import mascotFloor from "../assets/images/mascot_floor.svg";
import ChatIcon from "../assets/images/icons/icon_chats.svg?react";
import CoursesIcon from "../assets/images/icons/icon_courses.svg?react";
import ScheduleIcon from "../assets/images/icons/icon_schedule.svg?react";
import { format } from "date-fns";
import StudentService from "../services/StudentService";
import ProfessorService from "../services/ProfessorService";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const studentService = StudentService();
  const professorService = ProfessorService();

  const user = JSON.parse(localStorage.getItem("user"));
  const lastVisitedCourse = JSON.parse(
    localStorage.getItem("lastVisitedCourse")
  );

  const [schedule, setSchedule] = useState(null);

  const fetchStudentSchedule = async () => {
    const scheduleDetails = await studentService.getStudentSchedule();
    setSchedule(scheduleDetails);
  };

  const fetchProfessorSchedule = async () => {
    const scheduleDetails = await professorService.getProfessorSchedule();
    setSchedule(scheduleDetails);
  };

  useEffect(() => {
    if (user && user.role === "student") {
      fetchStudentSchedule();
    } else if (user && user.role === "professor") {
      fetchProfessorSchedule();
    }
  }, []);

  const currentTime = new Date();

  // Formatear la hora en el formato deseado
  const formattedTime = format(currentTime, "h:mm a.")
    .replace(/([APMapm])/, "$1.")
    .toLowerCase();

  const today = new Date();

  // Formatear la fecha en el formato deseado
  const formattedDate = format(today, "EEEE, MMMM do yyyy");

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
            <p className="text-4xl font-medium pt-4">{formattedTime}</p>
            <p className="">{formattedDate}</p>
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
              {lastVisitedCourse ? (
                <div className="text-lg pt-1 flex">
                  <p className="font-medium">Last visited course:</p>&nbsp;
                  <a
                    className="underline cursor-pointer"
                    onClick={() =>
                      navigate(`/courses/${lastVisitedCourse._id}`)
                    }
                  >
                    {lastVisitedCourse.name}
                  </a>
                </div>
              ) : (
                <p className="text-lg pt-1">No courses registered yet</p>
              )}
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
              {schedule && schedule.incomingClasses.length > 0 ? (
                <div className="text-lg pt-1 flex">
                  <p className="font-medium">Next class:</p>&nbsp;
                  {schedule.incomingClasses[0].courseName} at{" "}
                  {schedule.incomingClasses[0].startHour}
                </div>
              ) : (
                <p className="text-lg pt-1">No events registered yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
