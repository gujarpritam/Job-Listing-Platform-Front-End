import axios from "axios";
const backendUrl = `http://localhost:4000/api/v1`;

export const createJobPost = async (JobPostPayload) => {
  try {
    const reqUrl = `${backendUrl}/job/create`;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.post(reqUrl, JobPostPayload);

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const getJobPostById = async (jobPostId) => {
  try {
    const reqUrl = `${backendUrl}/job/job-details/${jobPostId}`;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.get(reqUrl);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateJobPostById = async (jobPostId, updatedFormData) => {
  try {
    const reqUrl = `${backendUrl}/job/update/${jobPostId}`;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.put(reqUrl, updatedFormData);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllJobs = async (filter) => {
  try {
    const reqUrl = `${backendUrl}/job/all?title=${filter?.title || ""}&skills=${
      filter?.skills || ""
    }`;

    const response = await axios.get(reqUrl);

    console.log(typeof response);
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
