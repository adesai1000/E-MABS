import React, { useContext, useState, useEffect } from "react";
import upload from "../img/upload.png";
import more from "../img/more.png";
import download from "../img/download.png";
import Messages from "./Messages";
import { AuthContext } from "../context/AuthContext";
import { db, storage } from "../firebase";
import { getStorage, ref, uploadBytes, listAll,getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Chat from "./Chat"
const Message = () => {
  const { currentUser } = useContext(AuthContext);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, `${currentUser.displayName}`);
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
    <div className="message">
      <div className="messageInfo">
        <div className="img">{imageList.map((url)=>{
          return <img src={url} />
         }  
         )}</div>
        
      </div>
    </div>
  );
};

export default Message;
