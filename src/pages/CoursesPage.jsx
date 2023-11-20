import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";
import CourseCard from "../components/CourseCard";

function CoursesPage() {
  const studentService = StudentService();

  const [courses, setCourses] = useState(null);

  const fetchCourses = async () => {
    const coursesDetails = await studentService.getStudentCourses();
    setCourses(coursesDetails);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="flex-grow">
      <p className="text-left">Active classes</p>
      <div className="pt-5 grid grid-cols-2 gap-4">
        {courses &&
          courses.map((course) => {
            return <CourseCard course={course} key={course._id} />;
          })}
      </div>
    </div>
  );
}

export default CoursesPage;
