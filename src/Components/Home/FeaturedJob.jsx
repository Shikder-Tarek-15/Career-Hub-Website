import { useEffect, useState } from "react";
import Featured from "./Featured";

const FeaturedJob = () => {
  const [job, setJOb] = useState([]);
  const [dataLength, setDataLength] = useState(4);

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {job.slice(0, dataLength).map((job) => (
          <Featured key={job.id} job={job}></Featured>
        ))}
      </div>
      <div
        className={`text-center m-5 ${dataLength === job.length && "hidden"}`}
      >
        <button
          onClick={() => setDataLength(job.length)}
          className="btn btn-primary"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
