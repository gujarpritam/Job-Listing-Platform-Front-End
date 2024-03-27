import React from "react";
import Register from "../../components/Register/Register";
import authBG from "../../assets/images/auth.png";

function RegisterPage() {
  return (
    <div style={{ display: "flex", maxHeight: "100vh", maxWidth: "100vw" }}>
      <Register />
      <div
        style={{
          maxHeight: "100vh",
          width: "50vw",
          position: "relative",
          overflowY: "hidden",
          // border: "1px solid red",
        }}
      >
        <img
          src={authBG}
          style={{ maxHeight: "100%", width: "100%" }}
          alt="Login cover"
        />
        <h1
          style={{
            position: "absolute",
            right: "25%",
            top: "5%",
            color: "white",
          }}
        >
          Your Personal Job Finder
        </h1>
      </div>
    </div>
  );
}

export default RegisterPage;
