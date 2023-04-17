import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[2].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="Form-Container">
      <div className="Form-Wrapper">
        <span className="logo">E-MABS</span>
        <span className="title">LogIn</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Log in</button>
          {err && (
            <div className="error">
              {" "}
              Something went wrong, Please try again!{" "}
            </div>
          )}
        </form>
        <p>
          Don't have an account? <Link to="/register">Register </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
