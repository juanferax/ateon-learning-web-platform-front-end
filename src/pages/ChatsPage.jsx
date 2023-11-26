import React from "react";
import emptyLogo from "../assets/images/ateon_logo_empty.svg";
import ateonChat from "../assets/images/ateon_chat.png";
import SearchIcon from "../assets/images/icons/icon_search.svg?react";

function ChatsPage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex-grow flex flex-row h-full mb-3">
      {/* Chats List */}
      <div className="mx-5 w-[20%]">
        <div className="bg-[#F1F7FC] rounded-lg h-full text-left p-5 overflow-hidden">
          <p className="text-[#162A6E] font-semibold text-2xl">Chats</p>
          <div className="mt-5 flex p-1.5 px-3 border border-[#162A6E] rounded-lg">
            <SearchIcon />
            <input
              className="w-full rounded-lg outline-none bg-[#F1F7FC] text-center"
              type="text"
              placeholder="Search or start a new chat"
            />
          </div>
          <div className="flex flex-col h-full items-center justify-center text-center">
            <p
              className="text-[#B0B0B0] text-2xl font-semibold"
              style={{ width: 200 }}
            >
              Nothing to show yet
            </p>
            <img src={emptyLogo} alt="Ateon logo sleeping" className="pt-3" />
          </div>
        </div>
      </div>
      {/* Chat Content */}
      <div className="flex-grow">
        <div className="flex flex-col h-full">
          <div className="text-[#162A6E] flex-grow flex flex-col justify-center items-center">
            <img
              src={ateonChat}
              alt="Ateon mascot chat"
              style={{ height: 229, width: 248 }}
            />
            <p className="text-3xl font-semibold pt-5">Hey, {user.name}</p>
            <p className="w-[55%] pt-10">
              Communicating with mates and teachers makes everything better. For
              startes tap any chat if you want to see the messages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatsPage;
