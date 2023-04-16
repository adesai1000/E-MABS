import React, { useEffect, useState } from "react";
import Add from "../img/pfp-select.png";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const displayName = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL,

            })
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="Form-Container">
      <div className="Form-Wrapper">
        <span className="logo">E-MABS</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="pfp" />
            <span>Add profile picture</span>
          </label>
          <button>Sign Up</button>
          {err && (
            <div className="error">
              {" "}
              Something went wrong, Please try again!{" "}
            </div>
          )}
        </form>
        <p>Do You have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
