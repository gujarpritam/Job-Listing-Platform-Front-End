import axios from "axios";
// const backendUrl = `http://localhost:4000/api/v1`;

export const registerUser = async ({ email, password, mobile, name }) => {
  try {
    const reqUrl = `${process.env.REACT_APP_backendUrl}/auth/register`;

    const response = axios.post(reqUrl, { email, password, mobile, name });

    console.log(response);
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const reqUrl = `${process.env.REACT_APP_backendUrl}/auth/login`;

    const response = await axios.post(reqUrl, { email, password });

    localStorage.setItem("token", response.data.token);

    return response.data.name;
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
