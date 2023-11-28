import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function ClassScheduleCard({ classInfo }) {
  return (
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
                {classInfo.courseName}
              </TableCell>
              <TableCell align="left">
                {classInfo.startHour} - {classInfo.endHour}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ClassScheduleCard;
