import React from 'react'
import Add from "../img/pfp-select.png"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from 'react';

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[1].value;
    const email = e.target[0].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setErr(true);
    }

  }
  return (
    <div className='Form-Container'>
      <div className='Form-Wrapper'>
        <span className="logo">E-MABS</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id='file' />
          <label htmlFor="file"><img src={Add} alt='pfp' />
            <span>Add profile picture</span>
          </label>
          <button>Sign Up</button>
          {err && <div className='error'> Something went wrong, Please try again! </div>}
        </form>
        <p>
          Do You have an account? Login
        </p>
      </div>
    </div >
  )
}

export default Register
