import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";
import { format } from "date-fns";
import ClassScheduleCard from "../components/ClassScheduleCard";

function SchedulePage() {
  const studentService = StudentService();

  const [schedule, setSchedule] = useState(null);

  const today = new Date();

  // Formatear la fecha en el formato deseado
  const formattedDate = format(today, "MMMM dd 'of' yyyy");

  const fetchSchedule = async () => {
    const scheduleDetails = await studentService.getStudentSchedule();
    setSchedule(scheduleDetails);
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  return (
    <div className="flex-grow text-left">
      <p className="text-2xl font-semibold pb-3">
        Schedule for {formattedDate}
      </p>
      <div className="flex items-center">
        <p>Finished classes</p>
        <hr className="border-[#162A6E] flex-grow ml-3 border-opacity-70" />
      </div>
      {schedule &&
        schedule.finishedClasses &&
        schedule.finishedClasses.map((finishedClass, idx) => {
          return <ClassScheduleCard key={idx} classInfo={finishedClass} />;
        })}
      <div className="flex items-center pt-5">
        <p>Incoming classes</p>
        <hr className="border-[#162A6E] flex-grow ml-3 border-opacity-70" />
      </div>
      {schedule &&
        schedule.incomingClasses &&
        schedule.incomingClasses.map((incomingClass, idx) => {
          return <ClassScheduleCard key={idx} classInfo={incomingClass} />;
        })}
    </div>
  );
}

export default SchedulePage;
