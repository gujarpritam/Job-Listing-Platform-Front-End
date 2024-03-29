import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getJobPostById } from "../../apis/job";
import styles from "./JobDetails.module.css";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  // const isEditable = false;

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("token"));
    fetchJobDetails();
  }, []);

  const fetchJobDetails = async () => {
    if (!id) return;
    const result = await getJobPostById(id);
    setJobDetails(result.jobDetails);
    setIsEditable(result.isEditable);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      {jobDetails ? (
        <div className={styles.body}>
          {/* Navbar */}
          <div className={styles.nav}>
            <p className={styles.navText}>Jobfinder</p>
            <div className={styles.btnGrp}>
              {isLoggedIn ? (
                <button onClick={logout} className={styles.register}>
                  Logout
                </button>
              ) : (
                <>
                  <button className={styles.login}>Login</button>
                  <button className={styles.register}>Register</button>
                </>
              )}
            </div>
          </div>

          {/* Company Name */}
          <div className={styles.container}>
            <p className={styles.containerText}>{jobDetails?.companyName}</p>
          </div>

          {/* Job Details */}
          <div className={styles.containerBottom}>
            <div className={styles.preHeading}>
              <p className={styles.lightText}>
                {jobDetails?.companyName}&nbsp;&nbsp; • &nbsp;&nbsp;
                {jobDetails.jobType}
              </p>
            </div>

            {/* Job Role */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className={styles.heading}>
                <div>
                  <p
                    style={{
                      margin: "0px",
                    }}
                    className={styles.boldText}
                  >
                    {jobDetails.title}
                  </p>
                  <p className={styles.locationText}>{jobDetails.location}</p>
                </div>
              </div>
              <div>
                {isLoggedIn && isEditable && (
                  <button
                    onClick={() => {
                      navigate("/job-post", {
                        state: {
                          jobDetails: jobDetails,
                          edit: true,
                        },
                      });
                    }}
                    className={styles.edit}
                  >
                    Edit Job
                  </button>
                )}
              </div>
            </div>

            <div className={styles.perks}>
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    width: "10vw",
                  }}
                >
                  <span
                    style={{
                      color: "gray",
                    }}
                    class="material-symbols-outlined"
                  >
                    universal_currency_alt
                  </span>
                  <p className={styles.lightText}>Stipend</p>
                </div>
                <p className={styles.lightText2}>
                  Rs.{jobDetails.salary}/month
                </p>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    width: "10vw",
                  }}
                >
                  <span
                    style={{
                      color: "gray",
                    }}
                    class="material-symbols-outlined"
                  >
                    calendar_today
                  </span>

                  <p className={styles.lightText}>Duration</p>
                </div>

                <p className={styles.lightText2}>{jobDetails.duration}</p>
              </div>
            </div>

            {/* About Company */}
            <div className={styles.info}>
              <h2>About Company</h2>
              <p className={styles.lightText}>{jobDetails.about}</p>
            </div>

            {/* About Job/Internship */}
            <div className={styles.info}>
              <h2>About Job/Internship</h2>
              <p className={styles.lightText}>{jobDetails.description}</p>
            </div>

            {/* skills Required */}
            <div className={styles.info}>
              <h2>Skill(s) Required</h2>
              {jobDetails?.skills?.map((skill) => {
                return (
                  <p className={styles.skill} key={skill}>
                    {skill}
                  </p>
                );
              })}
            </div>

            {/* Additional Information */}
            <div className={styles.info}>
              <h2>Additional Information</h2>
              <p className={styles.lightText}>{jobDetails.information}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default JobDetails;
