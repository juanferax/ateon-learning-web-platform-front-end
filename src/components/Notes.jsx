import React, { useEffect, useState } from "react";
import emptyLogo from "../assets/images/ateon_logo_empty.svg";
import SendIcon from "../assets/images/icons/icon_send.svg?react";
import DownloadIcon from "../assets/images/icons/icon_download.svg?react";
import NoteAccordion from "./NoteAccordion";
import UserService from "../services/UserService";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CreatableSelect from "react-select/creatable";

function Notes() {
  const userService = UserService();

  const notes = JSON.parse(localStorage.getItem("user")).notesGroups;

  const [note, setNote] = useState("");
  const [noteGroup, setNoteGroup] = useState("");

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "0.5rem",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleGroupChange = (group) => {
    setNoteGroup(group ? group.value : "");
  };

  const saveNote = async () => {
    let noteData = {
      groupName: noteGroup,
      newNote: note,
    };
    await userService.saveNote(noteData);
    setNote("");
    setNoteGroup("");
    handleClose();
  };

  useEffect(() => {}, []);

  return (
    <div className="h-full flex flex-col">
      <p className="font-semibold text-xl text-left text-[#162A6E] pb-3">
        Notes:
      </p>
      <div className="flex flex-col h-full">
        <div className="bg-[#F1F7FC] rounded-t-lg h-full overflow-y-scroll">
          {notes ? (
            notes.map((noteGroup, idx) => {
              return (
                <>
                  <NoteAccordion key={idx} info={noteGroup} />
                  <hr className="border-[#8AC4FA] mx-5" />
                </>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-[#B0B0B0] text-2xl font-semibold w-4/5">
                Seems like you don't have any notes
              </p>
              <img src={emptyLogo} alt="Ateon logo sleeping" className="pt-3" />
            </div>
          )}
        </div>
        <div className="flex bg-[#162A6E] items-center justify-between h-12 px-4 rounded-b-lg relative">
          <DownloadIcon />
          <input
            type="text"
            placeholder="Type something wise..."
            name="Note"
            value={note}
            onChange={handleChange}
            className="rounded-2xl p-1 px-3 w-56 text-sm bg-[#30427E] text-white font-light"
          />
          <SendIcon onClick={handleOpen} />
        </div>
      </div>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="space-y-3">
          <p className="text-lg font-semibold text-[#162A6E]">
            In which group do you want to save the note?
          </p>
          <p>
            For a new group just type in the name and select the option
            "Create".
          </p>
          <CreatableSelect
            sx={{ mt: 2 }}
            isClearable
            value={noteGroup ? { value: noteGroup, label: noteGroup } : null}
            onChange={handleGroupChange}
            options={notes.map((noteGroup) => ({
              value: noteGroup.groupName,
              label: noteGroup.groupName,
            }))}
          />
          <button className="flex bg-[#162A6E] items-center" onClick={saveNote}>
            <p className="pr-3 text-white">Save Note</p>
            <SendIcon />
          </button>
        </Box>
      </Modal>
    </div>
  );
}

export default Notes;
