import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <span>Upload your first file by clicking the upload button!</span>
      </div>
    </div>
  );
};

export default Message;
