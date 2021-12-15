import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
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
      ></TextField>
      <TextField
        label="Password"
        type="password"
        style={{ marginTop: "20px", width: "300px" }}
      ></TextField>
      <br></br>
      <Button variant="contained" style={{ marginTop: "10px" }}>
        Submit
      </Button>
    </Box>
  );
};
export default Login;
