import React, { useContext, useState, useEffect } from "react";
import upload from "../img/upload.png";
import more from "../img/more.png";
import download from "../img/download.png";
import Messages from "./Messages";
import { AuthContext } from "../context/AuthContext";
import { db, storage } from "../firebase";
import { getStorage, ref, uploadBytes, listAll,getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
const Chat = () => {
  const { currentUser } = useContext(AuthContext);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, `${currentUser.displayName}`);
  const uploadImage = () => {
    if (imageUpload == null) return;

    const imageRef = ref(
      storage,
      `${currentUser.displayName}/${imageUpload.name + v4()}`
    );
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url)=>{
        setImageList((prev) =>[...prev,url])
      })
      
      alert("Image Uploaded!");
    });
  };
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) =>{
        getDownloadURL(item).then((url)=>{
          setImageList((prev) => [...prev,url]);
        })
      })
    });
  }, []);
  return (
    <div className="Chat">
      <div className="ChatInfo">
        <span>Welcome {currentUser.displayName}</span>
        <div className="ChatIcons">
          <input 
            type="file" id="uploadfile" class="hidden"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button onClick={uploadImage}>Upload</button>
          <button onClick={uploadImage}>Download</button>
          
        </div>
      </div>
      <Messages />
    </div>
  );
};

export default Chat;
