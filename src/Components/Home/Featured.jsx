import { Link } from "react-router-dom";

const Featured = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="border p-6 rounded-xl ">
      <img className="w-32 mb-4" src={logo} alt="" />
      <h3 className="text-xl font-bold mb-4">{job_title}</h3>
      <p className="text-sm mb-4">{company_name}</p>
      <div className="flex text-secondary gap-2 mb-4">
        <p className="border border-primary px-2  rounded-md">
          {remote_or_onsite}
        </p>
        <p className="border border-primary px-2  rounded-md">{job_type}</p>
      </div>
      <div className="flex gap-5 mb-4">
        <p>{location}</p>
        <p>Salary: {salary}</p>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  );
};

export default Featured;
