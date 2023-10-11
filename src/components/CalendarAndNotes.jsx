import React from "react";
import emptyLogo from "../assets/images/ateon_logo_empty.svg";
import SendIcon from "../assets/images/icons/icon_send.svg?react";
import DownloadIcon from "../assets/images/icons/icon_download.svg?react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function CalendarAndNotes() {
  return (
    <div className="mx-5 w-[25%]">
      <div className="flex flex-col h-full">
        <div className="flex flex-col justify-center">
          <p className="font-semibold text-xl text-left text-[#162A6E] pb-3">
            Calendar:
          </p>
          <div className="" style={{ marginBottom: -50, marginTop: -10 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>
        </div>
        <hr className="my-5 border-[#0528F2] border-opacity-50" />
        {/* Notes */}
        <div className="h-full flex flex-col">
          <p className="font-semibold text-xl text-left text-[#162A6E] pb-3">
            Notes:
          </p>
          <div className="flex flex-col h-full">
            <div className="bg-[#F1F7FC] rounded-t-lg h-full">
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-[#B0B0B0] text-2xl font-semibold w-4/5">
                  Seems like you don't have any notes
                </p>
                <img
                  src={emptyLogo}
                  alt="Ateon logo sleeping"
                  className="pt-3"
                />
              </div>
            </div>
            <div className="flex bg-[#162A6E] items-center justify-between h-12 px-4 rounded-b-lg relative">
              <DownloadIcon />
              <input
                type="text"
                placeholder="Type something wise..."
                className="rounded-2xl p-1 px-3 w-56 text-sm bg-[#30427E]"
              />
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarAndNotes;
