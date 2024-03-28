import React from "react";
import JobPost from "../../components/JobPost/JobPost";
import JobImage from "../../assets/images/job.png";

function JobPostPage() {
  return (
    <div style={{ display: "flex", maxHeight: "100vh", maxWidth: "100vw" }}>
      <JobPost />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img
          style={{
            position: "absolute",
            maxHeight: "100vh",
            width: "50vw",
            zIndex: 0,
          }}
          src={JobImage}
        />
        <h1
          style={{
            position: "relative",
            color: "white",
            zIndex: 1,
            left: "50%",
          }}
        >
          Your Personal Job Finder
        </h1>
      </div>
    </div>
  );
}

export default JobPostPage;
