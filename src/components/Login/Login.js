import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Already have an account ?</h1>
      <h2 className={styles.h2}>Your personal job finder is here</h2>
      <input
        className={styles.input}
        name="email"
        // value={formData.email}
        // onChange={handleFormChange}
        type={"email"}
        placeholder="Email"
      ></input>
      <input
        className={styles.input}
        name="password"
        // value={formData.password}
        // onChange={handleFormChange}
        type={"password"}
        placeholder="Password"
      ></input>
      <button className={styles.button}>Sign in</button>
      <p className={styles.footer}>
        Don&apos;t have an account?
        <span
          className={styles.underline}
          onClick={() => navigate("/register")}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default Login;
