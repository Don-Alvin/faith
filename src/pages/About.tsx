import MetaData from '@/components/Meta/meta';

const About: React.FC = () => {
  return (
    <div className="container-responsive py-16 sm:py-20 lg:py-24 mt-16 sm:mt-20 lg:mt-24">
      <MetaData 
        title="About Us" 
        description="Learn about Lamona Realtors - Kenya's trusted real estate partner. Our mission, values, and commitment to helping you find your dream property."
        keywords="about Lamona Realtors, real estate company Kenya, property experts, real estate services"
        url="/about"
      />
      
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="heading-responsive font-bold text-gray-900 mb-6">
          About <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Lamona Realtors</span>
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed">
          Coming soon - Learn more about our story, mission, and the team behind Kenya's premier real estate services.
        </p>
      </div>
    </div>
  );
};

export default About;