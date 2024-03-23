import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  console.log(jobs, id);
  const job = jobs.find((job) => job.id == parseInt(id));
  console.log(job);
  return (
    <div>
      <h2>Details of: {job.job_title}</h2>
    </div>
  );
};

export default JobDetails;
