const Banner = () => {
  return (
    <div className="flex items-center justify-around flex-col md:flex-row">
      <div className="space-y-4">
        <h1 className="text-6xl">
          One Step <br /> Closer To Your <br />
          <span className="text-secondary">Dream Job</span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. Manage all <br /> your job
          application from start to finish. Get Started
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <div className="w-96">
        <img src="/src/assets/user.png" />
      </div>
    </div>
  );
};

export default Banner;
