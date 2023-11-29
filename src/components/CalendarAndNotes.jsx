import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Notes from "./Notes";
import { useNavigate } from "react-router-dom";

function CalendarAndNotes() {
  const navigate = useNavigate();

  const handleCalendarChange = (newDate) => {
    const milliseconds = newDate.$d.getTime();
    navigate(`/schedule/${milliseconds}`);
  };

  return (
    <div className="mx-5 w-[25%]">
      <div className="flex flex-col h-full">
        <div className="flex flex-col justify-center bg-[#F1F7FC] rounded-lg">
          <p className="font-semibold text-lg text-left pb-2 pl-6 pt-3">
            Calendar
          </p>
          <div
            // className="bg-[#F1F7FC] rounded-lg"
            style={{ marginBottom: -40, marginTop: -10 }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                onChange={(newValue) => handleCalendarChange(newValue)}
              />
            </LocalizationProvider>
          </div>
        </div>
        <hr className="my-5 border-[#0528F2] border-opacity-50" />
        {/* Notes */}
        <Notes />
      </div>
    </div>
  );
}

export default CalendarAndNotes;
