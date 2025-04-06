import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroMissionSection from '../components/IntroMissionSection';
import FeatureRoadmapSection from '../components/FeatureRoadmapSection';
import WhyItMattersSection from '../components/WhyItMattersSection';
import GetInvolvedSection from '../components/GetInvolvedSection';
import Footer from '../components/Footer'; // Import footer

const Home: React.FC = () => {
  return (
    <div> {/* Or use Fragment <> */}
      <HeroSection />
      <IntroMissionSection />
      <FeatureRoadmapSection />
      <WhyItMattersSection />
      <GetInvolvedSection />
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default Home;