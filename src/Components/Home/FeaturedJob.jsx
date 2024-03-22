import { useEffect, useState } from "react";
import Featured from "./Featured";

const FeaturedJob = () => {
  const [job, setJOb] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJOb(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-5">
        <h2 className="text-5xl">Featured Jobs: {job.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {job.map((job) => (
          <Featured key={job.id} job={job}></Featured>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJob;
