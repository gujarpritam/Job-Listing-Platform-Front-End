import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobPostById } from "../../apis/job";

function JobDetails() {
  const { id } = useParams();

  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    fetchJobDetails();
  }, []);

  const fetchJobDetails = async () => {
    if (!id) return;
    const result = await getJobPostById(id);
    setJobDetails(result.data);
  };
  return <div>{id}</div>;
}

export default JobDetails;
