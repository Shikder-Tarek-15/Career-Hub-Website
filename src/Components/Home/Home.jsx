import Banner from "./Banner";
import FeaturedJob from "./FeaturedJob";
import JobCategory from "./JobCategory";

const Home = () => {
  return (
    <div className="space-y-32">
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJob></FeaturedJob>
    </div>
  );
};

export default Home;
