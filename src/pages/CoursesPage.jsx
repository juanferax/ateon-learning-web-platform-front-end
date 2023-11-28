import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";
import ProfessorService from "../services/ProfessorService";
import CourseCard from "../components/CourseCard";

function CoursesPage() {
  const studentService = StudentService();
  const professorService = ProfessorService();

  const user = JSON.parse(localStorage.getItem("user"));

  const [courses, setCourses] = useState(null);

  const fetchStudentCourses = async () => {
    const coursesDetails = await studentService.getStudentCourses();
    setCourses(coursesDetails);
  };

  const fetchProfessorCourses = async () => {
    const coursesDetails = await professorService.getProfessorCourses();
    setCourses(coursesDetails);
  };

  useEffect(() => {
    if (user && user.role === "student") {
      fetchStudentCourses();
    } else if (user && user.role === "professor") {
      fetchProfessorCourses();
    }
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
