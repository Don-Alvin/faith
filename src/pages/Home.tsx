import Listings from "@/components/Home/Listings";
import Header from "@/components/Home/Header";
import MetaData from "@/components/Meta/meta";
import Blogs from "@/components/Home/Blogs";
import Contact from "@/components/Home/Contact";

const Home: React.FC = () => {
  return (
    <div>
      <MetaData 
        title="Find Your Dream House" 
        description="Discover exceptional properties with Lamona Realtors - Kenya's premier real estate agency. Expert guidance for buying, selling, and investing in prime real estate."
        keywords="real estate Kenya, property Nairobi, buy house Kenya, sell property, real estate agent, dream home, property investment"
        url="/"
      />
      <Header />
      <Listings />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;