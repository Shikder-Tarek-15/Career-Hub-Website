const Featured = ({ job }) => {
  const { logo } = job;
  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
};

export default Featured;
