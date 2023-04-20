import React, { useContext, useState } from "react";
import upload from "../img/upload.png";
import more from "../img/more.png";
import download from "../img/download.png";
import Messages from "./Messages";
import { AuthContext } from "../context/AuthContext";
import { db, storage } from "../firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
const Chat = () => {
  const { currentUser } = useContext(AuthContext);
  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    if (imageUpload == null) return;

    const imageRef = ref(
      storage,
      `${currentUser.displayName}/${imageUpload.name + v4()}`
    );
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded!");
    });
  };
  return (
    <div className="Chat">
      <div className="ChatInfo">
        <span>Welcome {currentUser.displayName}</span>
        <div className="ChatIcons">
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button onClick={uploadImage}>Upload Image</button>
        </div>
      </div>
      <Messages />
    </div>
  );
};

export default Chat;
