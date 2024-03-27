import axios from "axios";

export const registerUser = async ({ email, password, mobile, name }) => {
  try {
    const reqUrl = "http://localhost:4000/api/v1/auth/register";

    const response = axios.post(reqUrl, { email, password, mobile, name });

    console.log(response);
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};