import React, { useState } from "react";
import IconButton from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { login } from "./redux/auth/authAction";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const clickHandler = () => {
    setVisible((prev) => !prev);
  };

  const history = useHistory();

  const submitHandler = (e) => {
    if (username && password) {
      e.preventDefault();
      dispatch(login());
      console.log("s");
      history.push("/list");
    } else {
      alert("Username or Password cannot have 0 characters");
    }
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <h1>LOGIN</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type={visible ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <IconButton onClick={clickHandler} className="iconbtn">
          {visible ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
