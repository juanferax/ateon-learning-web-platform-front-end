import React, { useEffect, useState } from "react";
import CourseService from "../services/CourseService";
import { useParams } from "react-router-dom";
import EditIcon from "../assets/images/icons/icon_edit.svg?react";
import ClassGroupCard from "../components/ClassGroupCard";

function CourseManagementPage() {
  const { id } = useParams();
  const [course, setCourseDetails] = useState(null);

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
          <p className="font-bold text-2xl text-[#162A6E] pb-3">
            {course.name}
          </p>
          <div className="flex items-center">
            <EditIcon />
            &nbsp;
            <p className="text-[#4FA4FA] underline">Edit general content</p>
          </div>
          <p className="font-bold text-xl text-[#162A6E] pt-14 pb-2">
            Choose the group you want to edit.
          </p>
          <div className="pt-5 grid grid-cols-2 gap-4">
            <ClassGroupCard
              classGroup={course.schedule}
              courseId={course._id}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CourseManagementPage;
