import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";
import { format } from "date-fns";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function SchedulePage() {
  const studentService = StudentService();

  const [schedule, setSchedule] = useState(null);

  const today = new Date();

  // Formatear la fecha en el formato deseado
  const formattedDate = format(today, "MMMM dd 'of' yyyy");

  //   const fetchSchedule = async () => {
  //     const scheduleDetails = await studentService.getStudentCourses();
  //     setSchedule(scheduleDetails);
  //   };

  //   useEffect(() => {
  //     fetchSchedule();
  //   }, []);

  return (
    <div className="flex-grow text-left">
      <p className="text-2xl font-semibold pb-3">
        Schedule for {formattedDate}
      </p>
      <div className="flex items-center">
        <p>Finished classes</p>
        <hr className="border-[#162A6E] flex-grow ml-3 border-opacity-70" />
      </div>
      <div className="py-4">
        <TableContainer className="border rounded-lg">
          <Table>
            <TableHead className="bg-[#F5506E]">
              <TableRow>
                <TableCell>
                  <p className="text-white">Course name</p>
                </TableCell>
                <TableCell align="left">
                  <p className="text-white">Time</p>
                </TableCell>
                <TableCell align="left">
                  <p className="text-white border rounded-md py-1 text-center cursor-pointer">
                    Enter class
                  </p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Linear algebra
                </TableCell>
                <TableCell align="left">7:00am - 10:00am</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="flex items-center pt-5">
        <p>Incoming classes</p>
        <hr className="border-[#162A6E] flex-grow ml-3 border-opacity-70" />
      </div>
      <div className="py-4">
        <TableContainer className="border rounded-lg">
          <Table>
            <TableHead className="bg-[#F5506E]">
              <TableRow>
                <TableCell>
                  <p className="text-white">Course name</p>
                </TableCell>
                <TableCell align="left">
                  <p className="text-white">Time</p>
                </TableCell>
                <TableCell align="left">
                  <p className="text-white border rounded-md py-1 text-center cursor-pointer">
                    Enter class
                  </p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  French II
                </TableCell>
                <TableCell align="left">2:00pm - 4:00pm</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default SchedulePage;
