import React, { useState } from "react";
import styles from "./Register.module.css";

function Register() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Create an account</h1>
      <h2 className={styles.h2}>Your personal job finder is here</h2>

      <input
        className={styles.input}
        name="name"
        // onChange={handleChange}
        type={"text"}
        placeholder="Name"
      ></input>

      <input
        className={styles.input}
        name="email"
        // onChange={handleChange}
        type={"email"}
        placeholder="Email"
      ></input>
      <input
        className={styles.input}
        name="mobile"
        // onChange={handleChange}
        type={"tel"}
        placeholder="Mobile"
      ></input>
      <input
        className={styles.input}
        name="password"
        // onChange={handleChange}
        type={"password"}
        placeholder="Password"
      ></input>

      <div>
        <input
          type="checkbox"
          // onChange={(event) => console.log(event.target.checked)}
          name="checkbox"
          id="checkbox"
        />
        <label htmlFor="checkbox" className={styles.label}>
          By creating an account, I agree to our terms of use and privacy policy
        </label>
      </div>

      <button className={styles.button}>Create Account</button>
      {/* <Button>Create account</Button> */}
      <p className={styles.footer}>
        Already have an account?
        <span
          className={styles.underline}
          // onClick={() => navigate("/login")}
        >
          Sign in
        </span>
      </p>
    </div>
  );
}

export default Register;
