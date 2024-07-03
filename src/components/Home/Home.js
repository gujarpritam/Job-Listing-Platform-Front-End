import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { DEFAULT_SKILLS } from "../../utils/constant";
import { getAllJobs } from "../../apis/job";

function Home() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [skills, setSkills] = useState([]);
  const [title, setTitle] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  console.log("testing");

  const fetchAllJobs = async () => {
    const filteredSkills = skills.join(",");
    console.log(filteredSkills);
    console.log(typeof filteredSkills);

    console.log({ title, skills: filteredSkills });
    const result = await getAllJobs({ title, skills: filteredSkills });
    setJobs(result?.data);
  };

  useEffect(() => {
    let token = !!localStorage.getItem("token");
    setIsLoggedIn(token);

    fetchAllJobs();
  }, []);

  const handleSkill = (event) => {
    const newArr = skills.filter((skill) => skill === event.target.value);
    if (!newArr.length) {
      setSkills([...skills, event.target.value]);
    }
  };

  const removeSkill = (selectedSkill) => {
    const newArr = skills.filter((skill) => skill !== selectedSkill);
    setSkills([...newArr]);
  };

  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <p className={styles.navText}>Jobfinder</p>
        <div className={styles.btnGrp}>
          {isLoggedIn ? (
            <button onClick={logout} className={styles.register}>
              Logout
            </button>
          ) : (
            <>
              <button
                className={styles.login}
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className={styles.register}
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerTop}>
          <input
            className={styles.inputTop}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            value={title}
            name="search"
            placeholder="Type any job title"
          />
        </div>

        <div className={styles.containerBottom}>
          <div>
            <select
              onChange={handleSkill}
              className={styles.inputSelect}
              name="remote"
            >
              <option value="" disabled selected>
                Skills
              </option>
              {DEFAULT_SKILLS.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
            <div>
              {skills?.map((skill) => {
                return (
                  <span className={styles.chip} key={skill}>
                    {skill}
                    <span
                      onClick={() => removeSkill(skill)}
                      className={styles.cross}
                    >
                      X
                    </span>
                  </span>
                );
              })}
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                setSkills([]);
                setTitle("");
              }}
              className={styles.edit}
            >
              Clear
            </button>
            <button onClick={fetchAllJobs} className={styles.edit}>
              Apply Filter
            </button>
            {!!token ? (
              <button
                onClick={() => navigate("/job-post")}
                className={styles.add}
              >
                Add Job
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        {jobs?.map((data) => {
          return (
            <div key={data._id} className={styles.list}>
              <div className={styles.listLeft}>
                <img
                  src={data.logoUrl}
                  alt={data?.companyName}
                  className={styles.companyLogo}
                />

                <div className={styles.infoLeft}>
                  <p className={styles.position}>{data.title}</p>
                  <p className={styles.extraInfo}>
                    {/* <span className={styles.greyText}>11-50</span> */}
                    <span className={styles.greyText}>
                      INR {data.salary}/ Month{" "}
                    </span>
                    <span className={styles.greyText}>{data.location}</span>
                  </p>
                  <p className={styles.extraInfo}>
                    <span className={styles.redText}>{data.locationType}</span>
                    <span className={styles.redText}>{data.jobType}</span>
                  </p>
                </div>
              </div>

              <div className={styles.listRight}>
                <div>
                  {data?.skills?.map((skill) => {
                    return (
                      <span className={styles.skill} key={skill}>
                        {skill}
                      </span>
                    );
                  })}
                </div>
                <div className={styles.btnGroup}>
                  <button
                    onClick={() => navigate(`/job-details/${data._id}`)}
                    className={styles.add}
                  >
                    Job Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
