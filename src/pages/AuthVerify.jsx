import React, { useState } from "react"; 
const AuthVerify = () => {
  return (
    <div className='Form-Container'>
      <div className='Form-Wrapper'>
        <span className="logo">E-MABS</span>
        <span className="title">2-Factor Authentication</span>
        <form>
          <input type="number" placeholder="Enter Verification Code" />
          <button>Back</button>
          <button>Next</button>
        </form>
      </div>
    </div>
  )
}

export default AuthVerify
