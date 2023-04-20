import React, { useContext } from "react";
import upload from "../img/upload.png";
import more from "../img/more.png";
import download from "../img/download.png";
import Messages from "./Messages";
import { AuthContext } from "../context/AuthContext";

const Chat = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="Chat">
      <div className="ChatInfo">
        <span>Welcome {currentUser.displayName}</span>
        <div className="ChatIcons">
          <img src={upload} alt="" />
          <img src={download} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
    </div>
  );
};
<Messages />;

export default Chat;
