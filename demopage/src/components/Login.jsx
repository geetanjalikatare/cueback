import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const obj = {
    emailId: "kiran.pyati@infobeans.com",
    password: "Login@123#@!",
  };
  const headers={
    "Content-Type":"application/json"
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("called")
    axios
      .post("https://infobeans.cueback.com/api/alumni/login",{headers:headers},obj)
      .then((res) => {
        console.log("res",res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "400px",
        height: "400px",
        marginLeft: "400px",
        marginTop: "120px",
        textAlign: "center",
      }}
    >
      <h1>Login Page</h1>
      <TextField
        label="Email"
        style={{ width: "300px", marginTop: "20px" }}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></TextField>
      <TextField
        label="Password"
        type="password"
        style={{ marginTop: "20px", width: "300px" }}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></TextField>
      <br></br>
      <Button
        variant="contained"
        style={{ marginTop: "10px" }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};
export default Login;
