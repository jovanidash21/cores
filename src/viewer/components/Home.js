import React from 'react';
import HomeHeader from '../containers/HomeHeader/Index';
import Intro from '../containers/Intro/Index';
import AboutSection from '../containers/AboutSection/Index';
import SeminarsSection from '../containers/SeminarsSection/Index';

const Home  = () => {
  return(
    <div>
      <HomeHeader />
      <Intro />
      <AboutSection />
      <SeminarsSection />
    </div>
  )
};

export default Home
