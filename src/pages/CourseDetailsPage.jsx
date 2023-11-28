import React, { useEffect, useState } from "react";
import TeacherIcon from "../assets/images/icons/icon_teacher.svg?react";
import ParticipantsIcon from "../assets/images/icons/icon_participants.svg?react";
import { useNavigate, useParams } from "react-router-dom";
import CourseVideoCard from "../components/CourseVideoCard";
import CourseService from "../services/CourseService";
import ModuleAccordion from "../components/ModuleAccordion";
import SettingsIcon from "../assets/images/icons/icon_settings.svg?react";

function CourseDetailsPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [course, setCourseDetails] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));

  const courseService = CourseService();

  const fetchCourseDetails = async () => {
    try {
      const courseDetails = await courseService.findById(id);
      setCourseDetails(courseDetails);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourseDetails();
  }, []);

  return (
    <>
      {course && (
        <div className="flex-grow text-left">
          <div className="flex pb-3">
            <p className="font-semibold text-2xl pr-4">{course.name}</p>
            {user && user.role === "professor" && (
              <div
                className="flex bg-[#6652FA] py-1 px-2 rounded-lg items-center cursor-pointer"
                onClick={() => navigate(`/courses/${course._id}/manage`)}
              >
                <p className="text-white mr-2">Manage course</p>
                <SettingsIcon />
              </div>
            )}
          </div>

          <div className="flex justify-between font-medium text-[#162A6E]">
            <div className="flex items-center">
              <p className="pr-2">Teacher: {course.professor.name}</p>
              <TeacherIcon />
            </div>
            <div className="flex items-center">
              <p className="pr-2">Participants</p>
              <ParticipantsIcon />
            </div>
            <div className="flex items-center">
              <div className="">
                <p className="pr-2">Module</p>
              </div>
              <div
                className="flex items-center justify-center"
                style={{
                  backgroundColor: "#6652FA",
                  borderRadius: "50%",
                  borderWidth: "2px",
                  borderColor: "#FFFFFF",
                  height: 39,
                  width: 39,
                }}
              >
                <p className="text-white">#</p>
              </div>
            </div>
          </div>
          {/* Recordings */}
          <div className="pt-5">
            <p className="font-semibold text-xl pb-3">Recordings</p>
            <div className="flex bg-[#F1F7FC] rounded-lg px-4 py-6 space-x-7 overflow-x-scroll">
              {course.recordings.map((video, idx) => {
                return (
                  <CourseVideoCard key={idx} video={{ title: video.title }} />
                );
              })}
            </div>
          </div>
          {/* Modules content */}
          <div className="">
            {course.modules.map((module, idx) => {
              return <ModuleAccordion key={idx} info={module} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default CourseDetailsPage;
